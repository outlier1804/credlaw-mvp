import {
    CreditReportItem,
    DisputeEvent,
    FurnisherResponse,
    RepoDocuments,
    Violation
} from '@/types/schema';
import { v4 as uuidv4 } from 'uuid';

/**
 * Part 1: The "Violation Engine" (Core Logic)
 */
export class ViolationEngine {

    /**
     * A. The "Reasonable Investigation" Logic
     * Legal Basis: Cushman v. TransUnion & Hinkle v. Midland Credit
     */
    static checkReasonableInvestigation(
        item: CreditReportItem,
        lastDispute: DisputeEvent,
        userId: string
    ): Violation | null {
        const now = new Date();
        // 1. Trigger: System detects a "Dispute Updated" event (Implied by calling this check)

        // 2. Condition: If Status == "Verified" AND Time_Elapsed < 30 Days (from dispute)
        const timeElapsed = (now.getTime() - lastDispute.dateSent.getTime()) / (1000 * 3600 * 24);

        if (item.status === 'Verified' && timeElapsed < 30) {
            // 3. Check: Did Furnisher provide original_instrument_of_indebtedness or payment_history_ledger?
            if (!item.originalInstrumentProvided && !item.paymentHistoryLedgerProvided) {
                // 4. Action: Tag Violation
                return {
                    id: uuidv4(),
                    userId,
                    caseLawReference: 'Hinkle v. Midland Credit / Cushman v. TransUnion',
                    statute: '15 U.S.C. § 1681i',
                    evidencePath: 'Pending generation',
                    status: 'DETECTED',
                    description: 'Failure to reasonably investigate: Verified without original instrument or ledger.',
                    createdAt: new Date()
                };
            }
        }
        return null;
    }

    /**
     * B. The "Method of Verification" (MOV) Trap
     * Legal Basis: Norman v. TransUnion & 15 U.S.C. § 1681i(a)(7)
     */
    static checkMOV(
        response: FurnisherResponse,
        movRequest: DisputeEvent,
        userId: string
    ): Violation | null {
        // 5. Condition: If Response contains "General Policy" OR "Electronic Verification" but NO specific contact info.
        // Note: We rely on the AI/OCR pre-processing flags here for simplicity in this engine.
        if (response.isGenericTemplate && !response.containsSpecificContactInfo) {
            return {
                id: uuidv4(),
                userId,
                caseLawReference: 'Norman v. TransUnion',
                statute: '15 U.S.C. § 1681i(a)(7)',
                evidencePath: 'Pending upload',
                status: 'DETECTED', // Should trigger logic to move to Attorney Dashboard
                description: 'MOV Failure: Generic response with no specific contact info.',
                createdAt: new Date()
            };
        }
        return null;
    }

    /**
     * C. The "Dispute Marker" Check
     * Legal Basis: Saunders v. BB&T & 15 U.S.C. § 1681s-2(a)
     */
    static checkDisputeMarker(
        item: CreditReportItem,
        disputeDate: Date,
        userId: string
    ): Violation | null {
        const now = new Date();
        const daysSinceDispute = (now.getTime() - disputeDate.getTime()) / (1000 * 3600 * 24);

        // 2. Wait: 30 Days -> Pull new Credit Report (Implied by calling this check after 30 days)
        if (daysSinceDispute >= 30) {
            // 4. Condition: Does Compliance_Condition_Code == "XB" (Account information disputed by consumer)?
            // Note: XB is a common code for "Consumer disputes", checking for inequality to XB
            if (item.complianceConditionCode !== 'XB') {
                return {
                    id: uuidv4(),
                    userId,
                    caseLawReference: 'Saunders v. BB&T',
                    statute: '15 U.S.C. § 1681s-2(a)',
                    evidencePath: 'Credit Report',
                    status: 'DETECTED',
                    description: 'Failure to Mark Dispute: Account not marked as disputed (XB code missing) after 30 days.',
                    createdAt: new Date()
                };
            }
        }
        return null;
    }

    /**
     * D. The Repossession Audit
     * Legal Basis: UCC Article 9 & Unlawful Repossession Playbook
     */
    static checkRepoNotice(
        docs: RepoDocuments,
        stateMinimumDays: number = 10,
        userId: string
    ): Violation | null {
        if (!docs.dateOfNotice || !docs.dateOfSale) return null;

        // 3. Condition: If (Date_Of_Sale - Date_Of_Notice) < 10 days (or state specific minimum).
        const daysNotice = (docs.dateOfSale.getTime() - docs.dateOfNotice.getTime()) / (1000 * 3600 * 24);

        if (daysNotice < stateMinimumDays) {
            return {
                id: uuidv4(),
                userId,
                caseLawReference: 'UCC Article 9',
                statute: 'State UCC Provisions',
                evidencePath: 'Repo Notices',
                status: 'DETECTED',
                description: `Wrongful Repo Notice: Sold in ${Math.floor(daysNotice)} days. Required ${stateMinimumDays} days.`,
                createdAt: new Date()
            };
        }

        return null;
    }
}

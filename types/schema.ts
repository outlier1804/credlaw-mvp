export type UserRole = 'SUPER_ADMIN' | 'ATTORNEY' | 'CRO' | 'CLIENT';

export type ViolationStatus = 'DETECTED' | 'CONFIRMED' | 'SENT_TO_ATTORNEY';

export interface Violation {
    id: string; // UUID
    userId: string; // Client ID
    caseLawReference: string; // e.g., "Norman v. TransUnion"
    statute: string; // e.g., "15 U.S.C. § 1681i"
    evidencePath?: string; // Link to uploaded PDF
    status: ViolationStatus;
    description: string;
    createdAt: Date;
}

export type DamageType = 'FINANCIAL' | 'EMOTIONAL' | 'REPUTATIONAL';

export interface Damage {
    id: string; // UUID
    userId: string; // Client ID
    type: DamageType;
    amount: number; // Decimal
    description: string; // e.g., "Denied mortgage on 08/14/25"
    documentProof?: string; // Link to denial letter
    createdAt: Date;
}

// Mock Credit Report Structures
export interface CreditReportItem {
    id: string;
    accountName: string;
    furnisher: string; // e.g., "Chase Bank", "Midland Credit"
    status: string; // e.g., "Verified", "Deleted", "Key Update"
    dateVerified?: Date;
    complianceConditionCode?: string; // e.g., "XB"
    originalInstrumentProvided: boolean; // For Hinkle check
    paymentHistoryLedgerProvided: boolean; // For Hinkle check
}

export interface DisputeEvent {
    id: string;
    dateSent: Date;
    itemId: string; // Links to CreditReportItem
    type: 'INITIAL_DISPUTE' | 'MOV_REQUEST';
}

export interface FurnisherResponse {
    id: string;
    dateReceived: Date;
    itemId: string;
    contentOCR: string; // Text content from OCR
    isGenericTemplate: boolean; // AI assessed
    containsSpecificContactInfo: boolean; // AI assessed
}

export interface RepoDocuments {
    id: string;
    dateOfNotice?: Date;
    dateOfSale?: Date;
    uploadedAt: Date;
}

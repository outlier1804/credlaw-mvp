
export const LEGAL_TEMPLATES = {
    // 1. Failure to Investigate (Hinkle v. Midland)
    hinkle_violation: `
Model Argument: Failure to Conduct Reasonable Investigation (Hinkle v. Midland Credit Management)

LEGAL STANDARD:
Under 15 U.S.C. § 1681s-2(b), a furnisher of information has a duty to conduct a "reasonable investigation" upon receiving a notice of dispute from a Consumer Reporting Agency (CRA). As established in Hinkle v. Midland Credit Management, 827 F.3d 1295 (11th Cir. 2016), a furnisher cannot merely "verify" an account by matching a name and social security number. The furnisher must review the underlying documentation, including the original account application and transaction history, to verify the accuracy of the disputed information.

VIOLATION:
In this matter, the Furnisher responded to the Consumer's dispute by "verifying" the account as accurate without providing any evidence that it reviewed the original instrument of indebtedness or the payment history ledger. The Furnisher's failure to provide such documentation suggests a reliance on automated data matching rather than a substantive investigation, constituting a willful violation of § 1681s-2(b).

DEMAND:
The Consumer demands immediate deletion of the trade line or production of the original account contract and a complete transaction ledger proving the debt's validity.
`,

    // 2. method of Verification Failure (Norman v. TransUnion)
    norman_mov: `
Model Argument: Failure to Provide Method of Verification (Norman v. TransUnion)

LEGAL STANDARD:
Pursuant to 15 U.S.C. § 1681i(a)(7), a consumer reporting agency must provide, upon request, a description of the procedure used to verify the disputed information, including the business name and address of any furnisher of information contacted in connection with such information and the telephone number of such furnisher, if reasonably available. In Norman v. TransUnion, LLC, the court held that a generic response stating that the CRA "contacted the furnisher" without specific details is insufficient to satisfy this requirement.

VIOLATION:
The Consumer requested a Method of Verification (MOV) on [DATE]. The CRA's response failed to identify the specific individual contacted at the furnisher, the specific documents reviewed, or the mode of transmission (e.g., e-OSCAR or ACDV). This generic response is a violation of § 1681i(a)(7).

DEMAND:
The Consumer demands the specific "Method of Verification" used, including the name of the agent at the furnisher's office who verified this debt. Failure to provide this information renders the verification invalid, requiring immediate deletion under § 1681i(a)(5)(A).
`,

    // 3. Wrongful Repossession (UCC Article 9)
    wrongful_repo: `
Model Argument: Commercial Unreasonableness in Disposition of Collateral (UCC Article 9)

LEGAL STANDARD:
Under Uniform Commercial Code (UCC) § 9-610, every aspect of a disposition of collateral, including the method, manner, time, place, and terms, must be commercially reasonable. Furthermore, under UCC § 9-611, a secured party must send a reasonable authenticated notification of disposition to the debtor.

VIOLATION:
The Secured Party sold the vehicle on [DATE] but failed to provide the Debtor with the required "Notice of Plan to Sell Property" at least 10 days prior to the sale (or within the timeframe required by state law). This failure deprives the Debtor of the right to redeem the collateral or find a buyer, rendering the sale commercially unreasonable.

DEMAND:
The Consumer demands that any deficiency balance be waived and that the repossession be removed from the Consumer's credit report due to the Secured Party's failure to comply with the strict notice requirements of UCC Article 9.
`,

    // 4. Vicarious Liability (FDCPA)
    vicarious_liability: `
Model Argument: Vicarious Liability for Actions of Debt Collectors (Janetos v. Fulton Friedman & Gullace, LLP)

LEGAL STANDARD:
Under the Fair Debt Collection Practices Act (FDCPA), a debt collector may be held vicariously liable for the unlawful collection activities of its agents. As established in Janetos v. Fulton Friedman & Gullace, LLP, 825 F.3d 317 (7th Cir. 2016), a debt collector cannot avoid liability by delegating its collection duties to a third party.

VIOLATION:
The primary debt collector, [NAME], is vicariously liable for the actions of its third-party collection agency, [AGENCY NAME], which violated the FDCPA by [SPECIFIC VIOLATION].

DEMAND:
The Consumer holds both the primary debt collector and its agent jointly and severally liable for statutory damages under 15 U.S.C. § 1692k.
`
};

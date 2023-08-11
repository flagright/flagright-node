/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface Business {
    /** Unique user ID for the user <span style="white-space: nowrap">`non-empty`</span> */
    userId: string;
    /** Timestamp when the user was created */
    createdTimestamp: number;
    legalEntity: Flagright.LegalEntity;
    userStateDetails?: Flagright.UserStateDetails;
    kycStatusDetails?: Flagright.KycStatusDetails;
    /** Shareholders (beneficiaries) of the company that hold at least 25% ownership. Can be another company or an individual */
    shareHolders?: Flagright.Person[];
    /** Director(s) of the company. Must be at least one */
    directors?: Flagright.Person[];
    transactionLimits?: Flagright.TransactionLimits;
    riskLevel?: Flagright.RiskLevel;
    allowedPaymentMethods?: Flagright.PaymentMethod[];
    linkedEntities?: Flagright.BusinessEntityLink;
    acquisitionChannel?: Flagright.AcquisitionChannel;
    savedPaymentDetails?: Flagright.BusinessOptionalSavedPaymentDetailsItem[];
    mccDetails?: Flagright.MccDetails;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for User details
 */
export interface UserOptional {
    userDetails?: Flagright.UserDetails;
    userStateDetails?: Flagright.UserStateDetails;
    kycStatusDetails?: Flagright.KycStatusDetails;
    employmentStatus?: Flagright.EmploymentStatus;
    occupation?: string;
    /** User's legal identity documents - See Document Model for details */
    legalDocuments?: Flagright.LegalDocument[];
    contactDetails?: Flagright.ContactDetails;
    transactionLimits?: Flagright.TransactionLimits;
    riskLevel?: Flagright.RiskLevel;
    acquisitionChannel?: Flagright.AcquisitionChannel;
    reasonForAccountOpening?: string[];
    sourceOfFunds?: Flagright.SourceOfFunds[];
    userSegment?: Flagright.ConsumerUserSegment;
    pepStatus?: Flagright.PepStatus[];
    linkedEntities?: Flagright.UserEntityLink;
    savedPaymentDetails?: Flagright.UserOptionalSavedPaymentDetailsItem[];
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

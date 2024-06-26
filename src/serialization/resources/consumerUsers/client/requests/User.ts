/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flagright from "../../../../../api";
import * as core from "../../../../../core";

export const User: core.serialization.Schema<serializers.User.Raw, Flagright.User> = core.serialization.object({
    userId: core.serialization.string(),
    createdTimestamp: core.serialization.number(),
    userDetails: core.serialization.lazyObject(async () => (await import("../../../..")).UserDetails).optional(),
    userStateDetails: core.serialization
        .lazyObject(async () => (await import("../../../..")).UserStateDetails)
        .optional(),
    kycStatusDetails: core.serialization
        .lazyObject(async () => (await import("../../../..")).KycStatusDetails)
        .optional(),
    employmentStatus: core.serialization.lazy(async () => (await import("../../../..")).EmploymentStatus).optional(),
    occupation: core.serialization.string().optional(),
    legalDocuments: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../..")).LegalDocument))
        .optional(),
    contactDetails: core.serialization.lazyObject(async () => (await import("../../../..")).ContactDetails).optional(),
    transactionLimits: core.serialization
        .lazyObject(async () => (await import("../../../..")).TransactionLimits)
        .optional(),
    expectedIncome: core.serialization.lazyObject(async () => (await import("../../../..")).ExpectedIncome).optional(),
    riskLevel: core.serialization.lazy(async () => (await import("../../../..")).RiskLevel).optional(),
    acquisitionChannel: core.serialization
        .lazy(async () => (await import("../../../..")).AcquisitionChannel)
        .optional(),
    reasonForAccountOpening: core.serialization.list(core.serialization.string()).optional(),
    sourceOfFunds: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../../..")).SourceOfFunds))
        .optional(),
    userSegment: core.serialization.lazy(async () => (await import("../../../..")).ConsumerUserSegment).optional(),
    pepStatus: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../..")).PepStatus))
        .optional(),
    linkedEntities: core.serialization.lazyObject(async () => (await import("../../../..")).UserEntityLink).optional(),
    savedPaymentDetails: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../../..")).UserSavedPaymentDetailsItem))
        .optional(),
    tags: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../..")).Tag))
        .optional(),
});

export declare namespace User {
    interface Raw {
        userId: string;
        createdTimestamp: number;
        userDetails?: serializers.UserDetails.Raw | null;
        userStateDetails?: serializers.UserStateDetails.Raw | null;
        kycStatusDetails?: serializers.KycStatusDetails.Raw | null;
        employmentStatus?: serializers.EmploymentStatus.Raw | null;
        occupation?: string | null;
        legalDocuments?: serializers.LegalDocument.Raw[] | null;
        contactDetails?: serializers.ContactDetails.Raw | null;
        transactionLimits?: serializers.TransactionLimits.Raw | null;
        expectedIncome?: serializers.ExpectedIncome.Raw | null;
        riskLevel?: serializers.RiskLevel.Raw | null;
        acquisitionChannel?: serializers.AcquisitionChannel.Raw | null;
        reasonForAccountOpening?: string[] | null;
        sourceOfFunds?: serializers.SourceOfFunds.Raw[] | null;
        userSegment?: serializers.ConsumerUserSegment.Raw | null;
        pepStatus?: serializers.PepStatus.Raw[] | null;
        linkedEntities?: serializers.UserEntityLink.Raw | null;
        savedPaymentDetails?: serializers.UserSavedPaymentDetailsItem.Raw[] | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

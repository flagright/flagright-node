/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const UserWithRulesResult: core.serialization.ObjectSchema<
    serializers.UserWithRulesResult.Raw,
    Flagright.UserWithRulesResult
> = core.serialization.object({
    userId: core.serialization.string(),
    createdTimestamp: core.serialization.number(),
    activatedTimestamp: core.serialization.number().optional(),
    userDetails: core.serialization.lazyObject(async () => (await import("..")).UserDetails).optional(),
    userStateDetails: core.serialization.lazyObject(async () => (await import("..")).UserStateDetails).optional(),
    kycStatusDetails: core.serialization.lazyObject(async () => (await import("..")).KycStatusDetails).optional(),
    eoddDate: core.serialization.number().optional(),
    employmentStatus: core.serialization.lazy(async () => (await import("..")).EmploymentStatus).optional(),
    occupation: core.serialization.string().optional(),
    legalDocuments: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).LegalDocument))
        .optional(),
    contactDetails: core.serialization.lazyObject(async () => (await import("..")).ContactDetails).optional(),
    employmentDetails: core.serialization.lazyObject(async () => (await import("..")).EmploymentDetails).optional(),
    transactionLimits: core.serialization.lazyObject(async () => (await import("..")).TransactionLimits).optional(),
    expectedIncome: core.serialization.lazyObject(async () => (await import("..")).ExpectedIncome).optional(),
    riskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
    kycRiskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
    acquisitionChannel: core.serialization.lazy(async () => (await import("..")).AcquisitionChannel).optional(),
    reasonForAccountOpening: core.serialization.list(core.serialization.string()).optional(),
    sourceOfFunds: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).SourceOfFunds))
        .optional(),
    userSegment: core.serialization.lazy(async () => (await import("..")).ConsumerUserSegment).optional(),
    pepStatus: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PepStatus))
        .optional(),
    lastTransactionTimestamp: core.serialization.number().optional(),
    linkedEntities: core.serialization.lazyObject(async () => (await import("..")).UserEntityLink).optional(),
    savedPaymentDetails: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).UserWithRulesResultSavedPaymentDetailsItem))
        .optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).UserTag)).optional(),
    attachments: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PersonAttachment))
        .optional(),
    executedRules: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ExecutedRulesResult))
        .optional(),
    hitRules: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).HitRulesDetails))
        .optional(),
    riskScoreDetails: core.serialization.lazyObject(async () => (await import("..")).UserRiskScoreDetails).optional(),
});

export declare namespace UserWithRulesResult {
    interface Raw {
        userId: string;
        createdTimestamp: number;
        activatedTimestamp?: number | null;
        userDetails?: serializers.UserDetails.Raw | null;
        userStateDetails?: serializers.UserStateDetails.Raw | null;
        kycStatusDetails?: serializers.KycStatusDetails.Raw | null;
        eoddDate?: number | null;
        employmentStatus?: serializers.EmploymentStatus.Raw | null;
        occupation?: string | null;
        legalDocuments?: serializers.LegalDocument.Raw[] | null;
        contactDetails?: serializers.ContactDetails.Raw | null;
        employmentDetails?: serializers.EmploymentDetails.Raw | null;
        transactionLimits?: serializers.TransactionLimits.Raw | null;
        expectedIncome?: serializers.ExpectedIncome.Raw | null;
        riskLevel?: serializers.RiskLevel.Raw | null;
        kycRiskLevel?: serializers.RiskLevel.Raw | null;
        acquisitionChannel?: serializers.AcquisitionChannel.Raw | null;
        reasonForAccountOpening?: string[] | null;
        sourceOfFunds?: serializers.SourceOfFunds.Raw[] | null;
        userSegment?: serializers.ConsumerUserSegment.Raw | null;
        pepStatus?: serializers.PepStatus.Raw[] | null;
        lastTransactionTimestamp?: number | null;
        linkedEntities?: serializers.UserEntityLink.Raw | null;
        savedPaymentDetails?: serializers.UserWithRulesResultSavedPaymentDetailsItem.Raw[] | null;
        tags?: serializers.UserTag.Raw[] | null;
        attachments?: serializers.PersonAttachment.Raw[] | null;
        executedRules?: serializers.ExecutedRulesResult.Raw[] | null;
        hitRules?: serializers.HitRulesDetails.Raw[] | null;
        riskScoreDetails?: serializers.UserRiskScoreDetails.Raw | null;
    }
}

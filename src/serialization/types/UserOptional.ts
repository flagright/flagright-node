/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const UserOptional: core.serialization.ObjectSchema<serializers.UserOptional.Raw, Flagright.UserOptional> =
    core.serialization.object({
        userDetails: core.serialization.lazyObject(async () => (await import("..")).UserDetails).optional(),
        userStateDetails: core.serialization.lazyObject(async () => (await import("..")).UserStateDetails).optional(),
        kycStatusDetails: core.serialization.lazyObject(async () => (await import("..")).KycStatusDetails).optional(),
        employmentStatus: core.serialization.lazy(async () => (await import("..")).EmploymentStatus).optional(),
        occupation: core.serialization.string().optional(),
        legalDocuments: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).LegalDocument))
            .optional(),
        contactDetails: core.serialization.lazyObject(async () => (await import("..")).ContactDetails).optional(),
        transactionLimits: core.serialization.lazyObject(async () => (await import("..")).TransactionLimits).optional(),
        riskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
        acquisitionChannel: core.serialization.lazy(async () => (await import("..")).AcquisitionChannel).optional(),
        reasonForAccountOpening: core.serialization.list(core.serialization.string()).optional(),
        sourceOfFunds: core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).SourceOfFunds))
            .optional(),
        userSegment: core.serialization.lazy(async () => (await import("..")).ConsumerUserSegment).optional(),
        pepStatus: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).PepStatus))
            .optional(),
        savedPaymentDetails: core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).UserOptionalSavedPaymentDetailsItem))
            .optional(),
        tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
    });

export declare namespace UserOptional {
    interface Raw {
        userDetails?: serializers.UserDetails.Raw | null;
        userStateDetails?: serializers.UserStateDetails.Raw | null;
        kycStatusDetails?: serializers.KycStatusDetails.Raw | null;
        employmentStatus?: serializers.EmploymentStatus.Raw | null;
        occupation?: string | null;
        legalDocuments?: serializers.LegalDocument.Raw[] | null;
        contactDetails?: serializers.ContactDetails.Raw | null;
        transactionLimits?: serializers.TransactionLimits.Raw | null;
        riskLevel?: serializers.RiskLevel.Raw | null;
        acquisitionChannel?: serializers.AcquisitionChannel.Raw | null;
        reasonForAccountOpening?: string[] | null;
        sourceOfFunds?: serializers.SourceOfFunds.Raw[] | null;
        userSegment?: serializers.ConsumerUserSegment.Raw | null;
        pepStatus?: serializers.PepStatus.Raw[] | null;
        savedPaymentDetails?: serializers.UserOptionalSavedPaymentDetailsItem.Raw[] | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

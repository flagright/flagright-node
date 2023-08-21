/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BusinessOptional: core.serialization.ObjectSchema<
    serializers.BusinessOptional.Raw,
    Flagright.BusinessOptional
> = core.serialization.object({
    userStateDetails: core.serialization.lazyObject(async () => (await import("..")).UserStateDetails).optional(),
    kycStatusDetails: core.serialization.lazyObject(async () => (await import("..")).KycStatusDetails).optional(),
    legalEntity: core.serialization.lazyObject(async () => (await import("..")).LegalEntity).optional(),
    shareHolders: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).Person))
        .optional(),
    directors: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).Person))
        .optional(),
    transactionLimits: core.serialization.lazyObject(async () => (await import("..")).TransactionLimits).optional(),
    riskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
    allowedPaymentMethods: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).PaymentMethod))
        .optional(),
    linkedEntities: core.serialization.lazyObject(async () => (await import("..")).BusinessEntityLink).optional(),
    acquisitionChannel: core.serialization.lazy(async () => (await import("..")).AcquisitionChannel).optional(),
    savedPaymentDetails: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).BusinessOptionalSavedPaymentDetailsItem))
        .optional(),
    mccDetails: core.serialization.lazyObject(async () => (await import("..")).MccDetails).optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
});

export declare namespace BusinessOptional {
    interface Raw {
        userStateDetails?: serializers.UserStateDetails.Raw | null;
        kycStatusDetails?: serializers.KycStatusDetails.Raw | null;
        legalEntity?: serializers.LegalEntity.Raw | null;
        shareHolders?: serializers.Person.Raw[] | null;
        directors?: serializers.Person.Raw[] | null;
        transactionLimits?: serializers.TransactionLimits.Raw | null;
        riskLevel?: serializers.RiskLevel.Raw | null;
        allowedPaymentMethods?: serializers.PaymentMethod.Raw[] | null;
        linkedEntities?: serializers.BusinessEntityLink.Raw | null;
        acquisitionChannel?: serializers.AcquisitionChannel.Raw | null;
        savedPaymentDetails?: serializers.BusinessOptionalSavedPaymentDetailsItem.Raw[] | null;
        mccDetails?: serializers.MccDetails.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}
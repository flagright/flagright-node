/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flagright from "../../../../../api";
import * as core from "../../../../../core";

export const Business: core.serialization.Schema<serializers.Business.Raw, Flagright.Business> =
    core.serialization.object({
        userId: core.serialization.string(),
        createdTimestamp: core.serialization.number(),
        legalEntity: core.serialization.lazyObject(async () => (await import("../../../..")).LegalEntity),
        activatedTimestamp: core.serialization.number().optional(),
        userStateDetails: core.serialization
            .lazyObject(async () => (await import("../../../..")).UserStateDetails)
            .optional(),
        kycStatusDetails: core.serialization
            .lazyObject(async () => (await import("../../../..")).KycStatusDetails)
            .optional(),
        shareHolders: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../..")).Person))
            .optional(),
        directors: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../..")).Person))
            .optional(),
        transactionLimits: core.serialization
            .lazyObject(async () => (await import("../../../..")).TransactionLimits)
            .optional(),
        riskLevel: core.serialization.lazy(async () => (await import("../../../..")).RiskLevel).optional(),
        allowedPaymentMethods: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../..")).PaymentMethod))
            .optional(),
        linkedEntities: core.serialization
            .lazyObject(async () => (await import("../../../..")).UserEntityLink)
            .optional(),
        acquisitionChannel: core.serialization
            .lazy(async () => (await import("../../../..")).AcquisitionChannel)
            .optional(),
        savedPaymentDetails: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../..")).BusinessSavedPaymentDetailsItem))
            .optional(),
        mccDetails: core.serialization.lazyObject(async () => (await import("../../../..")).MccDetails).optional(),
        tags: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../..")).Tag))
            .optional(),
    });

export declare namespace Business {
    interface Raw {
        userId: string;
        createdTimestamp: number;
        legalEntity: serializers.LegalEntity.Raw;
        activatedTimestamp?: number | null;
        userStateDetails?: serializers.UserStateDetails.Raw | null;
        kycStatusDetails?: serializers.KycStatusDetails.Raw | null;
        shareHolders?: serializers.Person.Raw[] | null;
        directors?: serializers.Person.Raw[] | null;
        transactionLimits?: serializers.TransactionLimits.Raw | null;
        riskLevel?: serializers.RiskLevel.Raw | null;
        allowedPaymentMethods?: serializers.PaymentMethod.Raw[] | null;
        linkedEntities?: serializers.UserEntityLink.Raw | null;
        acquisitionChannel?: serializers.AcquisitionChannel.Raw | null;
        savedPaymentDetails?: serializers.BusinessSavedPaymentDetailsItem.Raw[] | null;
        mccDetails?: serializers.MccDetails.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

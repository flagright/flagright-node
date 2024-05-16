/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CardDetails: core.serialization.ObjectSchema<serializers.CardDetails.Raw, Flagright.CardDetails> =
    core.serialization.object({
        cardFingerprint: core.serialization.string().optional(),
        emailId: core.serialization.lazy(async () => (await import("..")).EmailId).optional(),
        cardIssuedCountry: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
        transactionReferenceField: core.serialization.string().optional(),
        "3DsDone": core.serialization.property("3dsDone", core.serialization.boolean().optional()),
        nameOnCard: core.serialization.lazyObject(async () => (await import("..")).ConsumerName).optional(),
        cardExpiry: core.serialization.lazyObject(async () => (await import("..")).CardExpiry).optional(),
        cardLast4Digits: core.serialization.string().optional(),
        cardBrand: core.serialization.lazy(async () => (await import("..")).CardBrand).optional(),
        cardFunding: core.serialization.lazy(async () => (await import("..")).CardFunding).optional(),
        cardAuthenticated: core.serialization.boolean().optional(),
        paymentChannel: core.serialization.string().optional(),
        cardType: core.serialization.lazy(async () => (await import("..")).CardType).optional(),
        merchantDetails: core.serialization.lazyObject(async () => (await import("..")).CardMerchantDetails).optional(),
        networkProviderRiskScore: core.serialization.number().optional(),
        tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
    });

export declare namespace CardDetails {
    interface Raw {
        cardFingerprint?: string | null;
        emailId?: serializers.EmailId.Raw | null;
        cardIssuedCountry?: serializers.CountryCode.Raw | null;
        transactionReferenceField?: string | null;
        "3dsDone"?: boolean | null;
        nameOnCard?: serializers.ConsumerName.Raw | null;
        cardExpiry?: serializers.CardExpiry.Raw | null;
        cardLast4Digits?: string | null;
        cardBrand?: serializers.CardBrand.Raw | null;
        cardFunding?: serializers.CardFunding.Raw | null;
        cardAuthenticated?: boolean | null;
        paymentChannel?: string | null;
        cardType?: serializers.CardType.Raw | null;
        merchantDetails?: serializers.CardMerchantDetails.Raw | null;
        networkProviderRiskScore?: number | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

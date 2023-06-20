/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const TransactionLimitsPaymentMethodLimits: core.serialization.ObjectSchema<
    serializers.TransactionLimitsPaymentMethodLimits.Raw,
    Flagright.TransactionLimitsPaymentMethodLimits
> = core.serialization.object({
    ach: core.serialization.property(
        "ACH",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    card: core.serialization.property(
        "CARD",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    iban: core.serialization.property(
        "IBAN",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    upi: core.serialization.property(
        "UPI",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    genericBankAccount: core.serialization.property(
        "GENERIC_BANK_ACCOUNT",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    mpesa: core.serialization.property(
        "MPESA",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    swift: core.serialization.property(
        "SWIFT",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    wallet: core.serialization.property(
        "WALLET",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
    check: core.serialization.property(
        "CHECK",
        core.serialization.lazyObject(async () => (await import("..")).TransactionLimit).optional()
    ),
});

export declare namespace TransactionLimitsPaymentMethodLimits {
    interface Raw {
        ACH?: serializers.TransactionLimit.Raw | null;
        CARD?: serializers.TransactionLimit.Raw | null;
        IBAN?: serializers.TransactionLimit.Raw | null;
        UPI?: serializers.TransactionLimit.Raw | null;
        GENERIC_BANK_ACCOUNT?: serializers.TransactionLimit.Raw | null;
        MPESA?: serializers.TransactionLimit.Raw | null;
        SWIFT?: serializers.TransactionLimit.Raw | null;
        WALLET?: serializers.TransactionLimit.Raw | null;
        CHECK?: serializers.TransactionLimit.Raw | null;
    }
}

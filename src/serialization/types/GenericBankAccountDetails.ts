/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const GenericBankAccountDetails: core.serialization.ObjectSchema<
    serializers.GenericBankAccountDetails.Raw,
    Flagright.GenericBankAccountDetails
> = core.serialization.object({
    accountNumber: core.serialization.string().optional(),
    accountType: core.serialization.string().optional(),
    accountBalance: core.serialization.lazyObject(async () => (await import("..")).Amount).optional(),
    bankName: core.serialization.string().optional(),
    bankCode: core.serialization.string().optional(),
    country: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
    name: core.serialization.string().optional(),
    bankAddress: core.serialization.lazyObject(async () => (await import("..")).Address).optional(),
    emailId: core.serialization.lazy(async () => (await import("..")).EmailId).optional(),
    specialInstructions: core.serialization.string().optional(),
    paymentChannel: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
    transitNumber: core.serialization.string().optional(),
});

export declare namespace GenericBankAccountDetails {
    interface Raw {
        accountNumber?: string | null;
        accountType?: string | null;
        accountBalance?: serializers.Amount.Raw | null;
        bankName?: string | null;
        bankCode?: string | null;
        country?: serializers.CountryCode.Raw | null;
        name?: string | null;
        bankAddress?: serializers.Address.Raw | null;
        emailId?: serializers.EmailId.Raw | null;
        specialInstructions?: string | null;
        paymentChannel?: string | null;
        tags?: serializers.Tag.Raw[] | null;
        transitNumber?: string | null;
    }
}

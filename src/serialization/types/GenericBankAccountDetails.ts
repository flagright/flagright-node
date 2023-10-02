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
    method: core.serialization.lazy(async () => (await import("..")).GeneralBankAccountPaymentMethod),
    accountNumber: core.serialization.string().optional(),
    accountType: core.serialization.string().optional(),
    bankName: core.serialization.string().optional(),
    bankCode: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    bankAddress: core.serialization.lazyObject(async () => (await import("..")).Address).optional(),
    specialInstructions: core.serialization.string().optional(),
    paymentChannel: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
});

export declare namespace GenericBankAccountDetails {
    interface Raw {
        method: serializers.GeneralBankAccountPaymentMethod.Raw;
        accountNumber?: string | null;
        accountType?: string | null;
        bankName?: string | null;
        bankCode?: string | null;
        name?: string | null;
        bankAddress?: serializers.Address.Raw | null;
        specialInstructions?: string | null;
        paymentChannel?: string | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

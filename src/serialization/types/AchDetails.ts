/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const AchDetails: core.serialization.ObjectSchema<serializers.AchDetails.Raw, Flagright.AchDetails> =
    core.serialization.object({
        routingNumber: core.serialization.string().optional(),
        accountNumber: core.serialization.string().optional(),
        accountBalance: core.serialization.lazyObject(async () => (await import("..")).Amount).optional(),
        bankName: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        bankAddress: core.serialization.lazyObject(async () => (await import("..")).Address).optional(),
        beneficiaryName: core.serialization.string().optional(),
        emailId: core.serialization.lazy(async () => (await import("..")).EmailId).optional(),
        tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
    });

export declare namespace AchDetails {
    interface Raw {
        routingNumber?: string | null;
        accountNumber?: string | null;
        accountBalance?: serializers.Amount.Raw | null;
        bankName?: string | null;
        name?: string | null;
        bankAddress?: serializers.Address.Raw | null;
        beneficiaryName?: string | null;
        emailId?: serializers.EmailId.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

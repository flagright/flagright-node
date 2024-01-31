/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const MpesaDetails: core.serialization.ObjectSchema<serializers.MpesaDetails.Raw, Flagright.MpesaDetails> =
    core.serialization.object({
        businessShortCode: core.serialization.string(),
        transactionType: core.serialization.lazy(async () => (await import("..")).MpesaTransactionType),
        phoneNumber: core.serialization.string(),
        emailId: core.serialization.lazy(async () => (await import("..")).EmailId).optional(),
        tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
    });

export declare namespace MpesaDetails {
    interface Raw {
        businessShortCode: string;
        transactionType: serializers.MpesaTransactionType.Raw;
        phoneNumber: string;
        emailId?: serializers.EmailId.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

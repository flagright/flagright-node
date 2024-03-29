/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const Amount: core.serialization.ObjectSchema<serializers.Amount.Raw, Flagright.Amount> =
    core.serialization.object({
        amountValue: core.serialization.number(),
        amountCurrency: core.serialization.lazy(async () => (await import("..")).CurrencyCode),
    });

export declare namespace Amount {
    interface Raw {
        amountValue: number;
        amountCurrency: serializers.CurrencyCode.Raw;
    }
}

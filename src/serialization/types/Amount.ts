/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { CurrencyCode } from "./CurrencyCode";

export const Amount: core.serialization.ObjectSchema<serializers.Amount.Raw, Flagright.Amount> =
    core.serialization.object({
        amountValue: core.serialization.number(),
        amountCurrency: CurrencyCode,
    });

export declare namespace Amount {
    export interface Raw {
        amountValue: number;
        amountCurrency: CurrencyCode.Raw;
    }
}

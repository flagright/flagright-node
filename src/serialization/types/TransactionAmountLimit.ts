/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { Amount } from "./Amount";

export const TransactionAmountLimit: core.serialization.ObjectSchema<
    serializers.TransactionAmountLimit.Raw,
    Flagright.TransactionAmountLimit
> = core.serialization.object({
    day: Amount.optional(),
    week: Amount.optional(),
    month: Amount.optional(),
    year: Amount.optional(),
});

export declare namespace TransactionAmountLimit {
    export interface Raw {
        day?: Amount.Raw | null;
        week?: Amount.Raw | null;
        month?: Amount.Raw | null;
        year?: Amount.Raw | null;
    }
}

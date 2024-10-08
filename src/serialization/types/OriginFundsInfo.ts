/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const OriginFundsInfo: core.serialization.ObjectSchema<
    serializers.OriginFundsInfo.Raw,
    Flagright.OriginFundsInfo
> = core.serialization.object({
    sourceOfFunds: core.serialization.string().optional(),
    sourceOfWealth: core.serialization.string().optional(),
});

export declare namespace OriginFundsInfo {
    interface Raw {
        sourceOfFunds?: string | null;
        sourceOfWealth?: string | null;
    }
}

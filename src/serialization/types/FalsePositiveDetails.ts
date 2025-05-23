/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";

export const FalsePositiveDetails: core.serialization.ObjectSchema<
    serializers.FalsePositiveDetails.Raw,
    Flagright.FalsePositiveDetails
> = core.serialization.object({
    isFalsePositive: core.serialization.boolean(),
    confidenceScore: core.serialization.number(),
});

export declare namespace FalsePositiveDetails {
    export interface Raw {
        isFalsePositive: boolean;
        confidenceScore: number;
    }
}

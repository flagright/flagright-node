/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CraRiskLevelUpdatedDetails: core.serialization.ObjectSchema<
    serializers.CraRiskLevelUpdatedDetails.Raw,
    Flagright.CraRiskLevelUpdatedDetails
> = core.serialization.object({
    riskLevel: core.serialization.string().optional(),
    userId: core.serialization.string().optional(),
});

export declare namespace CraRiskLevelUpdatedDetails {
    interface Raw {
        riskLevel?: string | null;
        userId?: string | null;
    }
}

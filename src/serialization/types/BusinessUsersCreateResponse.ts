/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BusinessUsersCreateResponse: core.serialization.ObjectSchema<
    serializers.BusinessUsersCreateResponse.Raw,
    Flagright.BusinessUsersCreateResponse
> = core.serialization
    .object({
        message: core.serialization.string().optional(),
        userId: core.serialization.string(),
        riskScoreDetails: core.serialization.lazyObject(async () => (await import("..")).RiskScoreDetails).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).RulesResults));

export declare namespace BusinessUsersCreateResponse {
    interface Raw extends serializers.RulesResults.Raw {
        message?: string | null;
        userId: string;
        riskScoreDetails?: serializers.RiskScoreDetails.Raw | null;
    }
}
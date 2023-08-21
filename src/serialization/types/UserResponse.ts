/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const UserResponse: core.serialization.ObjectSchema<serializers.UserResponse.Raw, Flagright.UserResponse> =
    core.serialization
        .object({
            riskScoreDetails: core.serialization
                .lazyObject(async () => (await import("..")).RiskScoreDetails)
                .optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).UserWithRulesResult));

export declare namespace UserResponse {
    interface Raw extends serializers.UserWithRulesResult.Raw {
        riskScoreDetails?: serializers.RiskScoreDetails.Raw | null;
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Flagright } from "flagright";
import * as core from "../../core";

export const ConsumerUsersResponse: core.serialization.ObjectSchema<
    serializers.ConsumerUsersResponse.Raw,
    Flagright.ConsumerUsersResponse
> = core.serialization.object({
    userId: core.serialization.string(),
    userRiskScoreDetails: core.serialization.lazyObject(async () => (await import("..")).RiskScoringResult).optional(),
});

export declare namespace ConsumerUsersResponse {
    interface Raw {
        userId: string;
        userRiskScoreDetails?: serializers.RiskScoringResult.Raw | null;
    }
}

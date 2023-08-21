/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ConsumerUsersResponse: core.serialization.ObjectSchema<
    serializers.ConsumerUsersResponse.Raw,
    Flagright.ConsumerUsersResponse
> = core.serialization.object({
    userId: core.serialization.string(),
    riskScoreDetails: core.serialization.lazyObject(async () => (await import("..")).RiskScoreDetails).optional(),
});

export declare namespace ConsumerUsersResponse {
    interface Raw {
        userId: string;
        riskScoreDetails?: serializers.RiskScoreDetails.Raw | null;
    }
}
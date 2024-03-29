/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const UserRiskScoreDetails: core.serialization.ObjectSchema<
    serializers.UserRiskScoreDetails.Raw,
    Flagright.UserRiskScoreDetails
> = core.serialization.object({
    kycRiskScore: core.serialization.number().optional(),
    craRiskScore: core.serialization.number().optional(),
    kycRiskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
    craRiskLevel: core.serialization.lazy(async () => (await import("..")).RiskLevel).optional(),
});

export declare namespace UserRiskScoreDetails {
    interface Raw {
        kycRiskScore?: number | null;
        craRiskScore?: number | null;
        kycRiskLevel?: serializers.RiskLevel.Raw | null;
        craRiskLevel?: serializers.RiskLevel.Raw | null;
    }
}

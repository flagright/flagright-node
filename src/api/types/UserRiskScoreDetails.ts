/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface UserRiskScoreDetails {
    kycRiskScore?: number;
    craRiskScore?: number;
    kycRiskLevel?: Flagright.RiskLevel;
    craRiskLevel?: Flagright.RiskLevel;
}
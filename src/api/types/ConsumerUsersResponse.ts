/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for consumer user risk score response
 */
export interface ConsumerUsersResponse {
    /** user ID the risk score pertains to */
    userId: string;
    riskScoreDetails?: Flagright.RiskScoreDetails;
    hitRules?: Flagright.HitRulesDetails[];
    executedRules?: Flagright.ExecutedRulesResult[];
}

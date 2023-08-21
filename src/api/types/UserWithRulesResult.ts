/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for consumer user payload with rules result
 */
export interface UserWithRulesResult extends Flagright.User {
    executedRules?: Flagright.ExecutedRulesResult[];
    hitRules?: Flagright.HitRulesDetails[];
}
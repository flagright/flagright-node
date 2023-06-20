/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for list of executed rules
 */
export interface ExecutedRulesResult {
    /** Unique rule identifier <span style="white-space: nowrap">`non-empty`</span> */
    ruleId: string;
    ruleInstanceId: string;
    /** Name of the rule <span style="white-space: nowrap">`non-empty`</span> */
    ruleName: string;
    /** Description of the rule <span style="white-space: nowrap">`non-empty`</span> */
    ruleDescription: string;
    ruleAction: Flagright.RuleAction;
    ruleHit: boolean;
    ruleHitMeta?: Flagright.RuleHitMeta;
    labels?: Flagright.RuleLabels[];
    nature?: Flagright.RuleNature;
}

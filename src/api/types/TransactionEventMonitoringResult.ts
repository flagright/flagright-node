/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface TransactionEventMonitoringResult {
    eventId: string;
    transaction: Flagright.Transaction;
    riskScoreDetails?: Flagright.TransactionRiskScoringResult;
    /** Unique transaction identifier */
    executedRules: Flagright.ExecutedRulesResult[];
    /** Unique transaction identifier */
    hitRules: Flagright.HitRulesDetails[];
}

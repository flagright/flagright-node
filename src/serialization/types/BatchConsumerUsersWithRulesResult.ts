/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { BatchConsumerUserWithRulesResult } from "./BatchConsumerUserWithRulesResult";

export const BatchConsumerUsersWithRulesResult: core.serialization.ObjectSchema<
    serializers.BatchConsumerUsersWithRulesResult.Raw,
    Flagright.BatchConsumerUsersWithRulesResult
> = core.serialization.object({
    consumerUsers: core.serialization.list(BatchConsumerUserWithRulesResult),
    totalCount: core.serialization.number(),
});

export declare namespace BatchConsumerUsersWithRulesResult {
    export interface Raw {
        consumerUsers: BatchConsumerUserWithRulesResult.Raw[];
        totalCount: number;
    }
}

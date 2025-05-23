/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { RuleAction } from "./RuleAction";

export const TransactionStatusDetails: core.serialization.ObjectSchema<
    serializers.TransactionStatusDetails.Raw,
    Flagright.TransactionStatusDetails
> = core.serialization.object({
    transactionId: core.serialization.string(),
    reasons: core.serialization.list(core.serialization.string()),
    status: RuleAction,
    comment: core.serialization.string().optional(),
});

export declare namespace TransactionStatusDetails {
    export interface Raw {
        transactionId: string;
        reasons: string[];
        status: RuleAction.Raw;
        comment?: string | null;
    }
}

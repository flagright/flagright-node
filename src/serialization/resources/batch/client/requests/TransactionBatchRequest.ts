/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Flagright from "../../../../../api/index";
import * as core from "../../../../../core";
import { Transaction } from "../../../../types/Transaction";

export const TransactionBatchRequest: core.serialization.Schema<
    serializers.TransactionBatchRequest.Raw,
    Omit<Flagright.TransactionBatchRequest, "validateOriginUserId" | "validateDestinationUserId">
> = core.serialization.object({
    batchId: core.serialization.string().optional(),
    data: core.serialization.list(Transaction),
});

export declare namespace TransactionBatchRequest {
    export interface Raw {
        batchId?: string | null;
        data: Transaction.Raw[];
    }
}

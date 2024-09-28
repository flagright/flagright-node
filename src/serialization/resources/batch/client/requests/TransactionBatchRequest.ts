/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flagright from "../../../../../api";
import * as core from "../../../../../core";

export const TransactionBatchRequest: core.serialization.Schema<
    serializers.TransactionBatchRequest.Raw,
    Omit<Flagright.TransactionBatchRequest, "validateOriginUserId" | "validateDestinationUserId">
> = core.serialization.object({
    batchId: core.serialization.string().optional(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../..")).Transaction)),
});

export declare namespace TransactionBatchRequest {
    interface Raw {
        batchId?: string | null;
        data: serializers.Transaction.Raw[];
    }
}
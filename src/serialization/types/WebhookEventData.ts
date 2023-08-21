/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const WebhookEventData: core.serialization.Schema<serializers.WebhookEventData.Raw, Flagright.WebhookEventData> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("..")).UserStateDetails),
        core.serialization.lazyObject(async () => (await import("..")).CaseClosedDetails),
        core.serialization.lazyObject(async () => (await import("..")).AlertClosedDetails),
        core.serialization.lazyObject(async () => (await import("..")).TransactionStatusDetails),
    ]);

export declare namespace WebhookEventData {
    type Raw =
        | serializers.UserStateDetails.Raw
        | serializers.CaseClosedDetails.Raw
        | serializers.AlertClosedDetails.Raw
        | serializers.TransactionStatusDetails.Raw;
}
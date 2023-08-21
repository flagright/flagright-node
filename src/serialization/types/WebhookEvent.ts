/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const WebhookEvent: core.serialization.ObjectSchema<serializers.WebhookEvent.Raw, Flagright.WebhookEvent> =
    core.serialization.object({
        id: core.serialization.string(),
        type_: core.serialization.property(
            "type",
            core.serialization.lazy(async () => (await import("..")).WebhookEventType)
        ),
        data: core.serialization.lazy(async () => (await import("..")).WebhookEventData),
        createdTimestamp: core.serialization.number(),
    });

export declare namespace WebhookEvent {
    interface Raw {
        id: string;
        type: serializers.WebhookEventType.Raw;
        data: serializers.WebhookEventData.Raw;
        createdTimestamp: number;
    }
}
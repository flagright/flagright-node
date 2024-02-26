/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const WebhookEventBase: core.serialization.ObjectSchema<
    serializers.WebhookEventBase.Raw,
    Flagright.WebhookEventBase
> = core.serialization.object({
    id: core.serialization.string(),
    triggeredBy: core.serialization.lazy(async () => (await import("..")).WebhookEventBaseTriggeredBy),
    createdTimestamp: core.serialization.number(),
});

export declare namespace WebhookEventBase {
    interface Raw {
        id: string;
        triggeredBy: serializers.WebhookEventBaseTriggeredBy.Raw;
        createdTimestamp: number;
    }
}

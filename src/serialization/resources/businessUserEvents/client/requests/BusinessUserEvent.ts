/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Flagright from "../../../../../api";
import * as core from "../../../../../core";

export const BusinessUserEvent: core.serialization.Schema<
    serializers.BusinessUserEvent.Raw,
    Omit<Flagright.BusinessUserEvent, "allowUserTypeConversion">
> = core.serialization.object({
    timestamp: core.serialization.number(),
    userId: core.serialization.string(),
    eventId: core.serialization.string().optional(),
    reason: core.serialization.string().optional(),
    eventDescription: core.serialization.string().optional(),
    updatedBusinessUserAttributes: core.serialization
        .lazyObject(async () => (await import("../../../..")).BusinessOptional)
        .optional(),
});

export declare namespace BusinessUserEvent {
    interface Raw {
        timestamp: number;
        userId: string;
        eventId?: string | null;
        reason?: string | null;
        eventDescription?: string | null;
        updatedBusinessUserAttributes?: serializers.BusinessOptional.Raw | null;
    }
}
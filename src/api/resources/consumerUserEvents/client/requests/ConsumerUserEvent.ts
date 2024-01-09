/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../../../..";

export interface ConsumerUserEvent {
    /**
     * Boolean string whether Flagright should allow a Consumer user event to be applied to a Business user with the same user ID. This will converts a Business user to a Consumer user.
     */
    allowUserTypeConversion?: Flagright.BooleanString;
    /** Timestamp of the event */
    timestamp: number;
    /** Transaction ID the event pertains to */
    userId: string;
    /** Unique event ID */
    eventId?: string;
    /** Reason for the event or a state change */
    reason?: string;
    /** Event description */
    eventDescription?: string;
    updatedConsumerUserAttributes?: Flagright.UserOptional;
}

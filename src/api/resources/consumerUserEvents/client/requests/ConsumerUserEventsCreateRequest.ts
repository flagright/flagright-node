/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../../../..";

/**
 * @example
 *     {
 *         body: {
 *             timestamp: 1.1,
 *             userId: "userId"
 *         }
 *     }
 */
export interface ConsumerUserEventsCreateRequest {
    /**
     * Boolean string whether Flagright should allow a Consumer user event to be applied to a Business user with the same user ID. This will converts a Business user to a Consumer user.
     */
    allowUserTypeConversion?: Flagright.BooleanString;
    body: Flagright.ConsumerUserEvent;
}

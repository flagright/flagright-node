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
export interface BusinessUserEventsCreateRequest {
    /**
     * Boolean string whether Flagright should allow a Business user event to be applied to a Consumer user with the same user ID. This will converts a Consumer user to a Business user.
     */
    allowUserTypeConversion?: Flagright.BooleanString;
    body: Flagright.BusinessUserEvent;
}

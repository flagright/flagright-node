/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 userId: "userId",
 *                 createdTimestamp: 1.1
 *             }]
 *     }
 */
export interface UserBatchRequest {
    batchId?: string;
    data: Flagright.User[];
}

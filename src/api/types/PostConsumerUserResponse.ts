/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface PostConsumerUserResponse extends Flagright.RulesResults {
    message?: string;
    /** user ID the risk score pertains to <span style="white-space: nowrap">`non-empty`</span> */
    userId: string;
}

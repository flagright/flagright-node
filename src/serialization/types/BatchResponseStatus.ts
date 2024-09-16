/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BatchResponseStatus: core.serialization.Schema<
    serializers.BatchResponseStatus.Raw,
    Flagright.BatchResponseStatus
> = core.serialization.enum_(["SUCCESS", "PARTIAL_FAILURE", "FAILURE"]);

export declare namespace BatchResponseStatus {
    type Raw = "SUCCESS" | "PARTIAL_FAILURE" | "FAILURE";
}

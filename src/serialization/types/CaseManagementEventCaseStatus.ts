/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CaseManagementEventCaseStatus: core.serialization.Schema<
    serializers.CaseManagementEventCaseStatus.Raw,
    Flagright.CaseManagementEventCaseStatus
> = core.serialization.enum_(["CLOSED", "HIT"]);

export declare namespace CaseManagementEventCaseStatus {
    type Raw = "CLOSED" | "HIT";
}

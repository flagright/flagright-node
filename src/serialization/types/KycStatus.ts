/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const KycStatus: core.serialization.Schema<serializers.KycStatus.Raw, Flagright.KycStatus> =
    core.serialization.enum_([
        "SUCCESSFUL",
        "FAILED",
        "NOT_STARTED",
        "IN_PROGRESS",
        "EXPIRED",
        "NEW",
        "CANCELLED",
        "MANUAL_REVIEW",
        "EDD_IN_PROGRESS",
    ]);

export declare namespace KycStatus {
    type Raw =
        | "SUCCESSFUL"
        | "FAILED"
        | "NOT_STARTED"
        | "IN_PROGRESS"
        | "EXPIRED"
        | "NEW"
        | "CANCELLED"
        | "MANUAL_REVIEW"
        | "EDD_IN_PROGRESS";
}

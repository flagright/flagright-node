/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const EmploymentStatus: core.serialization.Schema<serializers.EmploymentStatus.Raw, Flagright.EmploymentStatus> =
    core.serialization.enum_([
        "UNEMPLOYED",
        "EMPLOYED",
        "SELF_EMPLOYED",
        "STUDENT",
        "FULL_TIME",
        "PART_TIME",
        "SOLE_PROPRIETOR",
        "PENSIONER",
        "COMPANY_OWNER",
        "OTHER",
        "NA",
    ]);

export declare namespace EmploymentStatus {
    type Raw =
        | "UNEMPLOYED"
        | "EMPLOYED"
        | "SELF_EMPLOYED"
        | "STUDENT"
        | "FULL_TIME"
        | "PART_TIME"
        | "SOLE_PROPRIETOR"
        | "PENSIONER"
        | "COMPANY_OWNER"
        | "OTHER"
        | "NA";
}

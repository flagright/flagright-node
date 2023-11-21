/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CaseSubjectType: core.serialization.Schema<serializers.CaseSubjectType.Raw, Flagright.CaseSubjectType> =
    core.serialization.enum_(["USER", "PAYMENT"]);

export declare namespace CaseSubjectType {
    type Raw = "USER" | "PAYMENT";
}

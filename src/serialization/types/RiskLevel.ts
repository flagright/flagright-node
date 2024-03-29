/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const RiskLevel: core.serialization.Schema<serializers.RiskLevel.Raw, Flagright.RiskLevel> =
    core.serialization.enum_(["VERY_HIGH", "HIGH", "MEDIUM", "LOW", "VERY_LOW"]);

export declare namespace RiskLevel {
    type Raw = "VERY_HIGH" | "HIGH" | "MEDIUM" | "LOW" | "VERY_LOW";
}

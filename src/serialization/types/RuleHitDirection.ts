/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const RuleHitDirection: core.serialization.Schema<serializers.RuleHitDirection.Raw, Flagright.RuleHitDirection> =
    core.serialization.enum_(["ORIGIN", "DESTINATION"]);

export declare namespace RuleHitDirection {
    type Raw = "ORIGIN" | "DESTINATION";
}
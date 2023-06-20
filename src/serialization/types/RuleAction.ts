/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const RuleAction: core.serialization.Schema<serializers.RuleAction.Raw, Flagright.RuleAction> =
    core.serialization.enum_(["ALLOW", "FLAG", "BLOCK", "SUSPEND"]);

export declare namespace RuleAction {
    type Raw = "ALLOW" | "FLAG" | "BLOCK" | "SUSPEND";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BooleanString: core.serialization.Schema<serializers.BooleanString.Raw, Flagright.BooleanString> =
    core.serialization.enum_(["true", "false"]);

export declare namespace BooleanString {
    type Raw = "true" | "false";
}

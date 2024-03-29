/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const Gender: core.serialization.Schema<serializers.Gender.Raw, Flagright.Gender> = core.serialization.enum_([
    "M",
    "F",
    "NB",
]);

export declare namespace Gender {
    type Raw = "M" | "F" | "NB";
}

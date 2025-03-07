/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ListUpdatedDetailsAction: core.serialization.Schema<
    serializers.ListUpdatedDetailsAction.Raw,
    Flagright.ListUpdatedDetailsAction
> = core.serialization.enum_(["SET", "UNSET", "CLEAR"]);

export declare namespace ListUpdatedDetailsAction {
    type Raw = "SET" | "UNSET" | "CLEAR";
}

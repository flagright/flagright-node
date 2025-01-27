/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ListMetadataTtlUnit: core.serialization.Schema<
    serializers.ListMetadataTtlUnit.Raw,
    Flagright.ListMetadataTtlUnit
> = core.serialization.enum_(["HOUR", "DAY"]);

export declare namespace ListMetadataTtlUnit {
    type Raw = "HOUR" | "DAY";
}

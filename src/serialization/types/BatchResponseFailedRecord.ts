/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BatchResponseFailedRecord: core.serialization.ObjectSchema<
    serializers.BatchResponseFailedRecord.Raw,
    Flagright.BatchResponseFailedRecord
> = core.serialization.object({
    id: core.serialization.string().optional(),
    reasonCode: core.serialization.string().optional(),
});

export declare namespace BatchResponseFailedRecord {
    interface Raw {
        id?: string | null;
        reasonCode?: string | null;
    }
}

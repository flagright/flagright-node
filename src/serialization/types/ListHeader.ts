/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ListHeader: core.serialization.ObjectSchema<serializers.ListHeader.Raw, Flagright.ListHeader> =
    core.serialization.object({
        listId: core.serialization.string(),
        listType: core.serialization.lazy(async () => (await import("..")).ListType),
        subtype: core.serialization.lazy(async () => (await import("..")).ListSubtype),
        metadata: core.serialization.lazyObject(async () => (await import("..")).ListMetadata).optional(),
        createdTimestamp: core.serialization.number(),
        size: core.serialization.number().optional(),
        version: core.serialization.number().optional(),
    });

export declare namespace ListHeader {
    interface Raw {
        listId: string;
        listType: serializers.ListType.Raw;
        subtype: serializers.ListSubtype.Raw;
        metadata?: serializers.ListMetadata.Raw | null;
        createdTimestamp: number;
        size?: number | null;
        version?: number | null;
    }
}

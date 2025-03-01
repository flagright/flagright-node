/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ListMetadata: core.serialization.ObjectSchema<serializers.ListMetadata.Raw, Flagright.ListMetadata> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        status: core.serialization.boolean().optional(),
        checksum: core.serialization.string().optional(),
        ttl: core.serialization.lazyObject(async () => (await import("..")).ListMetadataTtl).optional(),
    });

export declare namespace ListMetadata {
    interface Raw {
        name?: string | null;
        description?: string | null;
        status?: boolean | null;
        checksum?: string | null;
        ttl?: serializers.ListMetadataTtl.Raw | null;
    }
}

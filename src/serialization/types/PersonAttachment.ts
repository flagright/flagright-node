/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const PersonAttachment: core.serialization.ObjectSchema<
    serializers.PersonAttachment.Raw,
    Flagright.PersonAttachment
> = core.serialization.object({
    id: core.serialization.string().optional(),
    comment: core.serialization.string().optional(),
    files: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).FileInfo)),
    userId: core.serialization.string(),
    createdAt: core.serialization.number().optional(),
    deletedAt: core.serialization.number().optional(),
});

export declare namespace PersonAttachment {
    interface Raw {
        id?: string | null;
        comment?: string | null;
        files: serializers.FileInfo.Raw[];
        userId: string;
        createdAt?: number | null;
        deletedAt?: number | null;
    }
}

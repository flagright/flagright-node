/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const BusinessEntityLink: core.serialization.ObjectSchema<
    serializers.BusinessEntityLink.Raw,
    Flagright.BusinessEntityLink
> = core.serialization.object({
    parentUserId: core.serialization.string().optional(),
    childUserIds: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace BusinessEntityLink {
    interface Raw {
        parentUserId?: string | null;
        childUserIds?: string[] | null;
    }
}

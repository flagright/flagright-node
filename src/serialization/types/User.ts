/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const User: core.serialization.ObjectSchema<serializers.User.Raw, Flagright.User> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("..")).UserBase))
    .extend(core.serialization.lazyObject(async () => (await import("..")).UserOptional));

export declare namespace User {
    interface Raw extends serializers.UserBase.Raw, serializers.UserOptional.Raw {}
}

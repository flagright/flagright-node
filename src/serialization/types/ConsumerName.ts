/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ConsumerName: core.serialization.ObjectSchema<serializers.ConsumerName.Raw, Flagright.ConsumerName> =
    core.serialization.object({
        firstName: core.serialization.string(),
        middleName: core.serialization.string().optional(),
        lastName: core.serialization.string().optional(),
    });

export declare namespace ConsumerName {
    interface Raw {
        firstName: string;
        middleName?: string | null;
        lastName?: string | null;
    }
}

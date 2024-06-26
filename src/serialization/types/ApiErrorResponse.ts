/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ApiErrorResponse: core.serialization.ObjectSchema<
    serializers.ApiErrorResponse.Raw,
    Flagright.ApiErrorResponse
> = core.serialization.object({
    message: core.serialization.string(),
    validationErrors: core.serialization.string().optional(),
});

export declare namespace ApiErrorResponse {
    interface Raw {
        message: string;
        validationErrors?: string | null;
    }
}

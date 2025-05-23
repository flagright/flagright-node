/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";

export const Date_: core.serialization.ObjectSchema<serializers.Date_.Raw, Flagright.Date_> = core.serialization.object(
    {
        day: core.serialization.number(),
        month: core.serialization.number(),
        year: core.serialization.number(),
    },
);

export declare namespace Date_ {
    export interface Raw {
        day: number;
        month: number;
        year: number;
    }
}

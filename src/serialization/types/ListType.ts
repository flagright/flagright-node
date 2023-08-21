/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const ListType: core.serialization.Schema<serializers.ListType.Raw, Flagright.ListType> =
    core.serialization.enum_(["WHITELIST", "BLACKLIST", "FLAGRIGHT_LIBRARY"]);

export declare namespace ListType {
    type Raw = "WHITELIST" | "BLACKLIST" | "FLAGRIGHT_LIBRARY";
}
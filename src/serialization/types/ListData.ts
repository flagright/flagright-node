/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { ListMetadata } from "./ListMetadata";
import { ListItem } from "./ListItem";

export const ListData: core.serialization.ObjectSchema<serializers.ListData.Raw, Flagright.ListData> =
    core.serialization.object({
        metadata: ListMetadata.optional(),
        items: core.serialization.list(ListItem).optional(),
    });

export declare namespace ListData {
    export interface Raw {
        metadata?: ListMetadata.Raw | null;
        items?: ListItem.Raw[] | null;
    }
}

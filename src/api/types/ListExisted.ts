/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * List with ID and header
 */
export interface ListExisted {
    listId: string;
    header: Flagright.ListHeader;
    /** List items */
    items: Flagright.ListItem[];
}

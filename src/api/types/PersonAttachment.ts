/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * PersonAttachment model generalizes User's uploaded attachments
 */
export interface PersonAttachment {
    id?: string;
    /** User's comment on the attached file. */
    comment?: string;
    files: Flagright.FileInfo[];
    userId: string;
    createdAt?: number;
    deletedAt?: number;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface WebhookEvent {
    id: string;
    type_: Flagright.WebhookEventType;
    data: Flagright.WebhookEventData;
    createdTimestamp: number;
}
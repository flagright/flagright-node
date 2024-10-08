/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const WebhookEventType: core.serialization.Schema<serializers.WebhookEventType.Raw, Flagright.WebhookEventType> =
    core.serialization.enum_([
        "CASE_CLOSED",
        "USER_STATE_UPDATED",
        "ALERT_CLOSED",
        "TRANSACTION_STATUS_UPDATED",
        "KYC_STATUS_UPDATED",
        "CASE_OPENED",
        "ALERT_OPENED",
        "USER_TAGS_UPDATED",
        "CRA_RISK_LEVEL_UPDATED",
    ]);

export declare namespace WebhookEventType {
    type Raw =
        | "CASE_CLOSED"
        | "USER_STATE_UPDATED"
        | "ALERT_CLOSED"
        | "TRANSACTION_STATUS_UPDATED"
        | "KYC_STATUS_UPDATED"
        | "CASE_OPENED"
        | "ALERT_OPENED"
        | "USER_TAGS_UPDATED"
        | "CRA_RISK_LEVEL_UPDATED";
}

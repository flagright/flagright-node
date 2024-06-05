/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type WebhookEventType =
    | "CASE_CLOSED"
    | "USER_STATE_UPDATED"
    | "ALERT_CLOSED"
    | "TRANSACTION_STATUS_UPDATED"
    | "KYC_STATUS_UPDATED"
    | "CASE_OPENED";

export const WebhookEventType = {
    CaseClosed: "CASE_CLOSED",
    UserStateUpdated: "USER_STATE_UPDATED",
    AlertClosed: "ALERT_CLOSED",
    TransactionStatusUpdated: "TRANSACTION_STATUS_UPDATED",
    KycStatusUpdated: "KYC_STATUS_UPDATED",
    CaseOpened: "CASE_OPENED",
} as const;

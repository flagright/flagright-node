/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the card
 */
export type CardStatus = "ACTIVE" | "FROZEN" | "BLOCKED" | "SUSPECTED_FRAUD" | "STOLEN" | "LOST" | "CLOSED" | "OTHER";
export const CardStatus = {
    Active: "ACTIVE",
    Frozen: "FROZEN",
    Blocked: "BLOCKED",
    SuspectedFraud: "SUSPECTED_FRAUD",
    Stolen: "STOLEN",
    Lost: "LOST",
    Closed: "CLOSED",
    Other: "OTHER",
} as const;

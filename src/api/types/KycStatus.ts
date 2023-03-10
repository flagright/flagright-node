/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type KycStatus = "SUCCESSFUL" | "FAILED" | "NOT_STARTED" | "IN_PROGRESS" | "MANUAL_REVIEW";

export const KycStatus = {
    Successful: "SUCCESSFUL",
    Failed: "FAILED",
    NotStarted: "NOT_STARTED",
    InProgress: "IN_PROGRESS",
    ManualReview: "MANUAL_REVIEW",
} as const;

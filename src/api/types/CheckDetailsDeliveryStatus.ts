/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CheckDetailsDeliveryStatus = "COMPLETED" | "PENDING" | "SETTLED" | "CANCELED" | "REFUND" | "DECLINED";

export const CheckDetailsDeliveryStatus = {
    Completed: "COMPLETED",
    Pending: "PENDING",
    Settled: "SETTLED",
    Canceled: "CANCELED",
    Refund: "REFUND",
    Declined: "DECLINED",
} as const;
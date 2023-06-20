/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of transaction
 */
export type MpesaDetailsTransactionType =
    | "CustomerPayBillOnline"
    | "CustomerBuyGoodsOnline"
    | "SalaryPayment"
    | "BusinessPayment"
    | "PromotionPayment";

export const MpesaDetailsTransactionType = {
    CustomerPayBillOnline: "CustomerPayBillOnline",
    CustomerBuyGoodsOnline: "CustomerBuyGoodsOnline",
    SalaryPayment: "SalaryPayment",
    BusinessPayment: "BusinessPayment",
    PromotionPayment: "PromotionPayment",
} as const;

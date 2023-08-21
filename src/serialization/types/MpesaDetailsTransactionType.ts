/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const MpesaDetailsTransactionType: core.serialization.Schema<
    serializers.MpesaDetailsTransactionType.Raw,
    Flagright.MpesaDetailsTransactionType
> = core.serialization.enum_([
    "CustomerPayBillOnline",
    "CustomerBuyGoodsOnline",
    "SalaryPayment",
    "BusinessPayment",
    "PromotionPayment",
]);

export declare namespace MpesaDetailsTransactionType {
    type Raw =
        | "CustomerPayBillOnline"
        | "CustomerBuyGoodsOnline"
        | "SalaryPayment"
        | "BusinessPayment"
        | "PromotionPayment";
}
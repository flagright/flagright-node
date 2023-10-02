/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for Mpesa payment method
 */
export interface MpesaDetails {
    method: Flagright.MpesaPaymentMethod;
    /** Business code <span style="white-space: nowrap">`non-empty`</span> */
    businessShortCode: string;
    /** Type of transaction */
    transactionType: Flagright.MpesaDetailsTransactionType;
    /** Contact Number of the account holder */
    phoneNumber: string;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

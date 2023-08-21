/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Payment details of the destination. It can be a bank account number, wallet ID, card fingerprint etc.
 */
export type TransactionUpdatableDestinationPaymentDetails =
    | Flagright.CardDetails
    | Flagright.GenericBankAccountDetails
    | Flagright.IbanDetails
    | Flagright.AchDetails
    | Flagright.UpiDetails
    | Flagright.WalletDetails
    | Flagright.SwiftDetails
    | Flagright.MpesaDetails
    | Flagright.CheckDetails;
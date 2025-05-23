/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../index";

export type TransactionWithRulesResultDestinationPaymentDetails =
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Card
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.GenericBankAccount
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Iban
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Ach
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Upi
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Wallet
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Swift
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Mpesa
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Check
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Cash
    | Flagright.TransactionWithRulesResultDestinationPaymentDetails.Npp;

export namespace TransactionWithRulesResultDestinationPaymentDetails {
    export interface Card extends Flagright.CardDetails {
        method: "CARD";
    }

    export interface GenericBankAccount extends Flagright.GenericBankAccountDetails {
        method: "GENERIC_BANK_ACCOUNT";
    }

    export interface Iban extends Flagright.IbanDetails {
        method: "IBAN";
    }

    export interface Ach extends Flagright.AchDetails {
        method: "ACH";
    }

    export interface Upi extends Flagright.UpiDetails {
        method: "UPI";
    }

    export interface Wallet extends Flagright.WalletDetails {
        method: "WALLET";
    }

    export interface Swift extends Flagright.SwiftDetails {
        method: "SWIFT";
    }

    export interface Mpesa extends Flagright.MpesaDetails {
        method: "MPESA";
    }

    export interface Check extends Flagright.CheckDetails {
        method: "CHECK";
    }

    export interface Cash extends Flagright.CashDetails {
        method: "CASH";
    }

    export interface Npp extends Flagright.NppDetails {
        method: "NPP";
    }
}

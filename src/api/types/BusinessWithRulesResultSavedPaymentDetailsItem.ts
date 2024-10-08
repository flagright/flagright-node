/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export type BusinessWithRulesResultSavedPaymentDetailsItem =
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Card
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.GenericBankAccount
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Iban
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Ach
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Swift
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Mpesa
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Upi
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Wallet
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Check
    | Flagright.BusinessWithRulesResultSavedPaymentDetailsItem.Cash;

export declare namespace BusinessWithRulesResultSavedPaymentDetailsItem {
    interface Card extends Flagright.CardDetails {
        method: "CARD";
    }

    interface GenericBankAccount extends Flagright.GenericBankAccountDetails {
        method: "GENERIC_BANK_ACCOUNT";
    }

    interface Iban extends Flagright.IbanDetails {
        method: "IBAN";
    }

    interface Ach extends Flagright.AchDetails {
        method: "ACH";
    }

    interface Swift extends Flagright.SwiftDetails {
        method: "SWIFT";
    }

    interface Mpesa extends Flagright.MpesaDetails {
        method: "MPESA";
    }

    interface Upi extends Flagright.UpiDetails {
        method: "UPI";
    }

    interface Wallet extends Flagright.WalletDetails {
        method: "WALLET";
    }

    interface Check extends Flagright.CheckDetails {
        method: "CHECK";
    }

    interface Cash extends Flagright.CashDetails {
        method: "CASH";
    }
}

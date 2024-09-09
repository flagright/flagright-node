/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const TransactionDestinationPaymentDetails: core.serialization.Schema<
    serializers.TransactionDestinationPaymentDetails.Raw,
    Flagright.TransactionDestinationPaymentDetails
> = core.serialization
    .union("method", {
        CARD: core.serialization.lazyObject(async () => (await import("..")).CardDetails),
        GENERIC_BANK_ACCOUNT: core.serialization.lazyObject(async () => (await import("..")).GenericBankAccountDetails),
        IBAN: core.serialization.lazyObject(async () => (await import("..")).IbanDetails),
        ACH: core.serialization.lazyObject(async () => (await import("..")).AchDetails),
        UPI: core.serialization.lazyObject(async () => (await import("..")).UpiDetails),
        WALLET: core.serialization.lazyObject(async () => (await import("..")).WalletDetails),
        SWIFT: core.serialization.lazyObject(async () => (await import("..")).SwiftDetails),
        MPESA: core.serialization.lazyObject(async () => (await import("..")).MpesaDetails),
        CHECK: core.serialization.lazyObject(async () => (await import("..")).CheckDetails),
        CASH: core.serialization.lazyObject(async () => (await import("..")).CheckDetails),
    })
    .transform<Flagright.TransactionDestinationPaymentDetails>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TransactionDestinationPaymentDetails {
    type Raw =
        | TransactionDestinationPaymentDetails.Card
        | TransactionDestinationPaymentDetails.GenericBankAccount
        | TransactionDestinationPaymentDetails.Iban
        | TransactionDestinationPaymentDetails.Ach
        | TransactionDestinationPaymentDetails.Upi
        | TransactionDestinationPaymentDetails.Wallet
        | TransactionDestinationPaymentDetails.Swift
        | TransactionDestinationPaymentDetails.Mpesa
        | TransactionDestinationPaymentDetails.Check
        | TransactionDestinationPaymentDetails.Cash;

    interface Card extends serializers.CardDetails.Raw {
        method: "CARD";
    }

    interface GenericBankAccount extends serializers.GenericBankAccountDetails.Raw {
        method: "GENERIC_BANK_ACCOUNT";
    }

    interface Iban extends serializers.IbanDetails.Raw {
        method: "IBAN";
    }

    interface Ach extends serializers.AchDetails.Raw {
        method: "ACH";
    }

    interface Upi extends serializers.UpiDetails.Raw {
        method: "UPI";
    }

    interface Wallet extends serializers.WalletDetails.Raw {
        method: "WALLET";
    }

    interface Swift extends serializers.SwiftDetails.Raw {
        method: "SWIFT";
    }

    interface Mpesa extends serializers.MpesaDetails.Raw {
        method: "MPESA";
    }

    interface Check extends serializers.CheckDetails.Raw {
        method: "CHECK";
    }

    interface Cash extends serializers.CheckDetails.Raw {
        method: "CASH";
    }
}

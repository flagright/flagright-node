/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const TransactionUpdatableDestinationPaymentDetails: core.serialization.Schema<
    serializers.TransactionUpdatableDestinationPaymentDetails.Raw,
    Flagright.TransactionUpdatableDestinationPaymentDetails
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
    })
    .transform<Flagright.TransactionUpdatableDestinationPaymentDetails>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TransactionUpdatableDestinationPaymentDetails {
    type Raw =
        | TransactionUpdatableDestinationPaymentDetails.Card
        | TransactionUpdatableDestinationPaymentDetails.GenericBankAccount
        | TransactionUpdatableDestinationPaymentDetails.Iban
        | TransactionUpdatableDestinationPaymentDetails.Ach
        | TransactionUpdatableDestinationPaymentDetails.Upi
        | TransactionUpdatableDestinationPaymentDetails.Wallet
        | TransactionUpdatableDestinationPaymentDetails.Swift
        | TransactionUpdatableDestinationPaymentDetails.Mpesa
        | TransactionUpdatableDestinationPaymentDetails.Check;

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
}

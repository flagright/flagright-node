/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { CardDetails } from "./CardDetails";
import { GenericBankAccountDetails } from "./GenericBankAccountDetails";
import { IbanDetails } from "./IbanDetails";
import { AchDetails } from "./AchDetails";
import { UpiDetails } from "./UpiDetails";
import { WalletDetails } from "./WalletDetails";
import { SwiftDetails } from "./SwiftDetails";
import { MpesaDetails } from "./MpesaDetails";
import { CheckDetails } from "./CheckDetails";
import { CashDetails } from "./CashDetails";
import { NppDetails } from "./NppDetails";

export const TransactionUpdatableDestinationPaymentDetails: core.serialization.Schema<
    serializers.TransactionUpdatableDestinationPaymentDetails.Raw,
    Flagright.TransactionUpdatableDestinationPaymentDetails
> = core.serialization
    .union("method", {
        CARD: CardDetails,
        GENERIC_BANK_ACCOUNT: GenericBankAccountDetails,
        IBAN: IbanDetails,
        ACH: AchDetails,
        UPI: UpiDetails,
        WALLET: WalletDetails,
        SWIFT: SwiftDetails,
        MPESA: MpesaDetails,
        CHECK: CheckDetails,
        CASH: CashDetails,
        NPP: NppDetails,
    })
    .transform<Flagright.TransactionUpdatableDestinationPaymentDetails>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TransactionUpdatableDestinationPaymentDetails {
    export type Raw =
        | TransactionUpdatableDestinationPaymentDetails.Card
        | TransactionUpdatableDestinationPaymentDetails.GenericBankAccount
        | TransactionUpdatableDestinationPaymentDetails.Iban
        | TransactionUpdatableDestinationPaymentDetails.Ach
        | TransactionUpdatableDestinationPaymentDetails.Upi
        | TransactionUpdatableDestinationPaymentDetails.Wallet
        | TransactionUpdatableDestinationPaymentDetails.Swift
        | TransactionUpdatableDestinationPaymentDetails.Mpesa
        | TransactionUpdatableDestinationPaymentDetails.Check
        | TransactionUpdatableDestinationPaymentDetails.Cash
        | TransactionUpdatableDestinationPaymentDetails.Npp;

    export interface Card extends CardDetails.Raw {
        method: "CARD";
    }

    export interface GenericBankAccount extends GenericBankAccountDetails.Raw {
        method: "GENERIC_BANK_ACCOUNT";
    }

    export interface Iban extends IbanDetails.Raw {
        method: "IBAN";
    }

    export interface Ach extends AchDetails.Raw {
        method: "ACH";
    }

    export interface Upi extends UpiDetails.Raw {
        method: "UPI";
    }

    export interface Wallet extends WalletDetails.Raw {
        method: "WALLET";
    }

    export interface Swift extends SwiftDetails.Raw {
        method: "SWIFT";
    }

    export interface Mpesa extends MpesaDetails.Raw {
        method: "MPESA";
    }

    export interface Check extends CheckDetails.Raw {
        method: "CHECK";
    }

    export interface Cash extends CashDetails.Raw {
        method: "CASH";
    }

    export interface Npp extends NppDetails.Raw {
        method: "NPP";
    }
}

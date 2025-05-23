/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";

export const WalletNetwork: core.serialization.Schema<serializers.WalletNetwork.Raw, Flagright.WalletNetwork> =
    core.serialization.enum_([
        "BITCOIN",
        "ETHEREUM",
        "POLYGON",
        "BNB_SMART_CHAIN",
        "BNB_BEACON_CHAIN",
        "ARBITRUM_L2",
        "SOLANA",
        "AVALANCHE_C_CHAIN",
        "TEZOS",
        "VICTION",
        "LITECOIN",
        "BITCOIN_CASH",
        "RIPPLE",
        "STELLAR",
        "EOS_PUBLIC",
        "TRON",
        "CARDANO",
        "POLKADOT",
        "NEAR_PROTOCOL",
        "COSMOS",
        "DOGECOIN",
        "OPTIMISM_MAINNET",
        "FANTOM",
        "HEDERA",
        "ALGORAND",
        "CELESTIA",
    ]);

export declare namespace WalletNetwork {
    export type Raw =
        | "BITCOIN"
        | "ETHEREUM"
        | "POLYGON"
        | "BNB_SMART_CHAIN"
        | "BNB_BEACON_CHAIN"
        | "ARBITRUM_L2"
        | "SOLANA"
        | "AVALANCHE_C_CHAIN"
        | "TEZOS"
        | "VICTION"
        | "LITECOIN"
        | "BITCOIN_CASH"
        | "RIPPLE"
        | "STELLAR"
        | "EOS_PUBLIC"
        | "TRON"
        | "CARDANO"
        | "POLKADOT"
        | "NEAR_PROTOCOL"
        | "COSMOS"
        | "DOGECOIN"
        | "OPTIMISM_MAINNET"
        | "FANTOM"
        | "HEDERA"
        | "ALGORAND"
        | "CELESTIA";
}

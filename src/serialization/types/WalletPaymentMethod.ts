/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const WalletPaymentMethod: core.serialization.Schema<
    serializers.WalletPaymentMethod.Raw,
    Flagright.WalletPaymentMethod
> = core.serialization.stringLiteral("WALLET");

export declare namespace WalletPaymentMethod {
    type Raw = "WALLET";
}

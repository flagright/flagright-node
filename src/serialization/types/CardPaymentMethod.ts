/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CardPaymentMethod: core.serialization.Schema<
    serializers.CardPaymentMethod.Raw,
    Flagright.CardPaymentMethod
> = core.serialization.stringLiteral("CARD");

export declare namespace CardPaymentMethod {
    type Raw = "CARD";
}

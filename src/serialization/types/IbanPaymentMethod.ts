/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const IbanPaymentMethod: core.serialization.Schema<
    serializers.IbanPaymentMethod.Raw,
    Flagright.IbanPaymentMethod
> = core.serialization.stringLiteral("IBAN");

export declare namespace IbanPaymentMethod {
    type Raw = "IBAN";
}
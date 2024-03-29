/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CheckPaymentMethod: core.serialization.Schema<
    serializers.CheckPaymentMethod.Raw,
    Flagright.CheckPaymentMethod
> = core.serialization.stringLiteral("CHECK");

export declare namespace CheckPaymentMethod {
    type Raw = "CHECK";
}

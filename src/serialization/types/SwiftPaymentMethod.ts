/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const SwiftPaymentMethod: core.serialization.Schema<
    serializers.SwiftPaymentMethod.Raw,
    Flagright.SwiftPaymentMethod
> = core.serialization.stringLiteral("SWIFT");

export declare namespace SwiftPaymentMethod {
    type Raw = "SWIFT";
}
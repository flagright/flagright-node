/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for UPI payment method
 */
export interface UpiDetails {
    method: Flagright.UpiPaymentMethod;
    /** UPI Id number <span style="white-space: nowrap">`non-empty`</span> */
    upiId: string;
    /** Bank provider name <span style="white-space: nowrap">`non-empty`</span> */
    bankProvider?: string;
    /** Interface provider name <span style="white-space: nowrap">`non-empty`</span> */
    interfaceProvider?: string;
    /** Name of the account holder */
    name?: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for SWIFT payment method
 */
export interface SwiftDetails {
    /** SWIFT code of the financial institution */
    swiftCode?: string;
    /** Account number */
    accountNumber?: string;
    /** Account type. E.g. Checking, Savings etc. */
    accountType?: string;
    /** Name of the bank */
    bankName?: string;
    /** Name of the account holder */
    name?: string;
    bankAddress?: Flagright.Address;
    /** Special instructions if any */
    specialInstructions?: string;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

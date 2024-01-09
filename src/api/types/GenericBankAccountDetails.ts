/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for any generic bank account
 */
export interface GenericBankAccountDetails {
    /** Bank account number */
    accountNumber?: string;
    /** Bank account type. E.g. Checking, Savings etc. */
    accountType?: string;
    /** Name of the bank */
    bankName?: string;
    /** Unique identifier of the bank. In some countries, this can be the same as the bank's SWIFT code */
    bankCode?: string;
    /** Name of the account holder */
    name?: string;
    bankAddress?: Flagright.Address;
    /** Special instructions to be specified if any */
    specialInstructions?: string;
    paymentChannel?: string;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

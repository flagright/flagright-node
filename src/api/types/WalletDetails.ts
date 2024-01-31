/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Standardized model for a Generic wallet transaction
 */
export interface WalletDetails {
    /** Wallet type if there are various types of wallets belonging to the same user. E.g. Checking, savings, vault, different currency wallets etc. */
    walletType: string;
    /** Unique ID of the wallet */
    walletId?: string;
    /** Payment Channel used through wallet */
    paymentChannel?: string;
    /** Name of the account holder for a specific wallet */
    name?: string;
    emailId?: Flagright.EmailId;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
    /** Phone number associated with the wallet, if any */
    walletPhoneNumber?: string;
    walletBalance?: Flagright.Amount;
}

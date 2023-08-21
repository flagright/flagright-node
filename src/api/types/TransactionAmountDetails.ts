/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for transaction amount details
 */
export interface TransactionAmountDetails {
    /** Amount of the transaction */
    transactionAmount: number;
    transactionCurrency: Flagright.CurrencyCode;
    country?: Flagright.CountryCode;
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for transaction base Payload
 */
export interface TransactionBase {
    type_?: Flagright.TransactionType;
    /** Unique transaction identifier <span style="white-space: nowrap">`non-empty`</span> */
    transactionId: string;
    /** Timestamp of when transaction took place */
    timestamp: number;
    /** UserId for where the transaction originates from */
    originUserId?: string;
    /** UserId for transaction's destination. In other words, where the value is being transferred to. */
    destinationUserId?: string;
}

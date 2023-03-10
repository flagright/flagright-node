/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Flagright } from "flagright";

/**
 * Model for transaction additional payload
 */
export interface TransactionUpdatable {
    transactionState?: Flagright.TransactionState;
    originAmountDetails?: Flagright.TransactionAmountDetails;
    destinationAmountDetails?: Flagright.TransactionAmountDetails;
    /** IDs of transactions related to this transaction. Ex: refund, split bills */
    relatedTransactionIds?: string[];
    /** Type of produce being used by the consumer (ex wallets, payments etc) */
    productType?: string;
    /** Whether a promotion code was used or not the transaction */
    promotionCodeUsed?: boolean;
    /** Reference field for the transaction indicating the purpose of the transaction etc. */
    reference?: string;
    deviceData?: Flagright.DeviceData;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

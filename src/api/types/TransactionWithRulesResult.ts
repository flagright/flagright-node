/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface TransactionWithRulesResult {
    type: Flagright.TransactionType;
    /** Unique transaction identifier */
    transactionId: string;
    /** Timestamp of when transaction took place */
    timestamp: number;
    /** UserId for where the transaction originates from */
    originUserId?: string;
    /** UserId for transaction's destination. In other words, where the value is being transferred to. */
    destinationUserId?: string;
    transactionState?: Flagright.TransactionState;
    originAmountDetails?: Flagright.TransactionAmountDetails;
    destinationAmountDetails?: Flagright.TransactionAmountDetails;
    /** Payment details of the origin. It can be a bank account number, wallet ID, card fingerprint etc. */
    originPaymentDetails?: Flagright.TransactionWithRulesResultOriginPaymentDetails;
    destinationPaymentDetails?: Flagright.TransactionWithRulesResultDestinationPaymentDetails;
    originFundsInfo?: Flagright.OriginFundsInfo;
    /** IDs of transactions related to this transaction. Ex: refund, split bills */
    relatedTransactionIds?: string[];
    /** Type of produce being used by the consumer (ex wallets, payments etc) */
    productType?: string;
    /** Whether a promotion code was used or not the transaction */
    promotionCodeUsed?: boolean;
    /** Reference field for the transaction indicating the purpose of the transaction etc. */
    reference?: string;
    originDeviceData?: Flagright.DeviceData;
    destinationDeviceData?: Flagright.DeviceData;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
    executedRules: Flagright.ExecutedRulesResult[];
    hitRules: Flagright.HitRulesDetails[];
    status: Flagright.RuleAction;
    riskScoreDetails?: Flagright.TransactionRiskScoringResult;
}

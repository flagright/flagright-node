/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for transaction limits for a given user
 */
export interface TransactionLimits {
    maximumDailyTransactionLimit?: Flagright.Amount;
    maximumWeeklyTransactionLimit?: Flagright.Amount;
    maximumMonthlyTransactionLimit?: Flagright.Amount;
    maximumQuarterlyTransactionLimit?: Flagright.Amount;
    maximumTransactionLimit?: Flagright.Amount;
    maximumYearlyTransactionLimit?: Flagright.Amount;
    paymentMethodLimits?: Flagright.TransactionLimitsPaymentMethodLimits;
}
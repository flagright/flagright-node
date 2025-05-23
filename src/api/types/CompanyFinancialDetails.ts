/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../index";

/**
 * Model for business user company financial details
 */
export interface CompanyFinancialDetails {
    expectedTransactionAmountPerMonth?: Flagright.Amount;
    expectedTurnoverPerMonth?: Flagright.Amount;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

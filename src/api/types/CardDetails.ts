/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for credit or debit card details
 */
export interface CardDetails {
    /** Unique card fingerprint that helps identify a specific card without having to use explicit card number. This is likely available at your card payment scheme provider */
    cardFingerprint?: string;
    emailId?: Flagright.EmailId;
    cardIssuedCountry?: Flagright.CountryCode;
    /** Reference for the transaction */
    transactionReferenceField?: string;
    /** Whether 3ds was successfully enforced for the transaction */
    "3DsDone"?: boolean;
    nameOnCard?: Flagright.ConsumerName;
    cardExpiry?: Flagright.CardExpiry;
    /** Last 4 digits of Card */
    cardLast4Digits?: string;
    cardBrand?: Flagright.CardBrand;
    cardFunding?: Flagright.CardFunding;
    /** Authentication of Card */
    cardAuthenticated?: boolean;
    paymentChannel?: string;
    cardType?: Flagright.CardType;
    merchantDetails?: Flagright.CardMerchantDetails;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

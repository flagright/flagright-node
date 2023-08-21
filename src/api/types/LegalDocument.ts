/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * LegalDocument model generalizes User's identity document type (ex: Passport)
 */
export interface LegalDocument {
    /** User's identity document type such as passport, national ID etc. <span style="white-space: nowrap">`non-empty`</span> */
    documentType: string;
    /** User's unique identity document number such as passport number <span style="white-space: nowrap">`non-empty`</span> */
    documentNumber: string;
    /** User's identity document issuance date (UNIX timestamp in milliseconds) */
    documentIssuedDate?: number;
    /** User's identity document expiration date (UNIX timestamp in milliseconds) */
    documentExpirationDate?: number;
    documentIssuedCountry: Flagright.CountryCode;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
    nameOnDocument?: Flagright.ConsumerName;
}
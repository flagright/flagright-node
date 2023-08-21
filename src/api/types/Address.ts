/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for standardized address
 */
export interface Address {
    /** Address lines of the user's residence address */
    addressLines: unknown[];
    /** Post code of the user's residence address <span style="white-space: nowrap">`non-empty`</span> */
    postcode?: string;
    /** City of the user's residence address <span style="white-space: nowrap">`non-empty`</span> */
    city: string;
    /** State of the user's residence address <span style="white-space: nowrap">`non-empty`</span> */
    state?: string;
    /** User's country of residence <span style="white-space: nowrap">`non-empty`</span> */
    country: string;
    /** Additional information that can be added via tags */
    tags?: Flagright.Tag[];
}

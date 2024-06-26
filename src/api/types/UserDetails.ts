/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

/**
 * Model for consumer user personal details
 */
export interface UserDetails {
    name: Flagright.ConsumerName;
    /** Date of birth of the user (YYYY-MM-DD) */
    dateOfBirth?: string;
    countryOfResidence?: Flagright.CountryCode;
    countryOfNationality?: Flagright.CountryCode;
    gender?: Flagright.Gender;
    placeOfBirth?: Flagright.PlaceOfBirth;
}

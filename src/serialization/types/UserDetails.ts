/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const UserDetails: core.serialization.ObjectSchema<serializers.UserDetails.Raw, Flagright.UserDetails> =
    core.serialization.object({
        name: core.serialization.lazyObject(async () => (await import("..")).ConsumerName).optional(),
        dateOfBirth: core.serialization.string().optional(),
        userCategory: core.serialization.string().optional(),
        countryOfResidence: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
        countryOfTaxResidence: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
        countryOfNationality: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
        gender: core.serialization.lazy(async () => (await import("..")).Gender).optional(),
        maritalStatus: core.serialization.lazy(async () => (await import("..")).MaritalStatus).optional(),
        placeOfBirth: core.serialization.lazyObject(async () => (await import("..")).PlaceOfBirth).optional(),
        alias: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace UserDetails {
    interface Raw {
        name?: serializers.ConsumerName.Raw | null;
        dateOfBirth?: string | null;
        userCategory?: string | null;
        countryOfResidence?: serializers.CountryCode.Raw | null;
        countryOfTaxResidence?: serializers.CountryCode.Raw | null;
        countryOfNationality?: serializers.CountryCode.Raw | null;
        gender?: serializers.Gender.Raw | null;
        maritalStatus?: serializers.MaritalStatus.Raw | null;
        placeOfBirth?: serializers.PlaceOfBirth.Raw | null;
        alias?: string[] | null;
    }
}

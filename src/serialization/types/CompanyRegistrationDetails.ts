/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CompanyRegistrationDetails: core.serialization.ObjectSchema<
    serializers.CompanyRegistrationDetails.Raw,
    Flagright.CompanyRegistrationDetails
> = core.serialization.object({
    registrationIdentifier: core.serialization.string(),
    registrationCountry: core.serialization.lazy(async () => (await import("..")).CountryCode),
    taxResidenceCountry: core.serialization.lazy(async () => (await import("..")).CountryCode).optional(),
    taxIdentifier: core.serialization.string().optional(),
    legalEntityType: core.serialization.string().optional(),
    dateOfRegistration: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
});

export declare namespace CompanyRegistrationDetails {
    interface Raw {
        registrationIdentifier: string;
        registrationCountry: serializers.CountryCode.Raw;
        taxResidenceCountry?: serializers.CountryCode.Raw | null;
        taxIdentifier?: string | null;
        legalEntityType?: string | null;
        dateOfRegistration?: string | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

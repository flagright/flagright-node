/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const LegalEntity: core.serialization.ObjectSchema<serializers.LegalEntity.Raw, Flagright.LegalEntity> =
    core.serialization.object({
        companyGeneralDetails: core.serialization.lazyObject(async () => (await import("..")).CompanyGeneralDetails),
        companyFinancialDetails: core.serialization
            .lazyObject(async () => (await import("..")).CompanyFinancialDetails)
            .optional(),
        companyRegistrationDetails: core.serialization
            .lazyObject(async () => (await import("..")).CompanyRegistrationDetails)
            .optional(),
        reasonForAccountOpening: core.serialization.list(core.serialization.string()).optional(),
        sourceOfFunds: core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).SourceOfFunds))
            .optional(),
        contactDetails: core.serialization.lazyObject(async () => (await import("..")).ContactDetails).optional(),
    });

export declare namespace LegalEntity {
    interface Raw {
        companyGeneralDetails: serializers.CompanyGeneralDetails.Raw;
        companyFinancialDetails?: serializers.CompanyFinancialDetails.Raw | null;
        companyRegistrationDetails?: serializers.CompanyRegistrationDetails.Raw | null;
        reasonForAccountOpening?: string[] | null;
        sourceOfFunds?: serializers.SourceOfFunds.Raw[] | null;
        contactDetails?: serializers.ContactDetails.Raw | null;
    }
}

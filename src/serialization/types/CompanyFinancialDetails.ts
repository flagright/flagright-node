/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CompanyFinancialDetails: core.serialization.ObjectSchema<
    serializers.CompanyFinancialDetails.Raw,
    Flagright.CompanyFinancialDetails
> = core.serialization.object({
    expectedTransactionAmountPerMonth: core.serialization
        .lazyObject(async () => (await import("..")).Amount)
        .optional(),
    expectedTurnoverPerMonth: core.serialization.lazyObject(async () => (await import("..")).Amount).optional(),
    tags: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Tag)).optional(),
});

export declare namespace CompanyFinancialDetails {
    interface Raw {
        expectedTransactionAmountPerMonth?: serializers.Amount.Raw | null;
        expectedTurnoverPerMonth?: serializers.Amount.Raw | null;
        tags?: serializers.Tag.Raw[] | null;
    }
}

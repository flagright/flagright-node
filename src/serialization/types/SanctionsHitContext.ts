/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const SanctionsHitContext: core.serialization.ObjectSchema<
    serializers.SanctionsHitContext.Raw,
    Flagright.SanctionsHitContext
> = core.serialization.object({
    entity: core.serialization.lazy(async () => (await import("..")).SanctionsScreeningEntity),
    entityType: core.serialization.lazy(async () => (await import("..")).SanctionsDetailsEntityType).optional(),
    userId: core.serialization.string().optional(),
    transactionId: core.serialization.string().optional(),
    ruleInstanceId: core.serialization.string().optional(),
    iban: core.serialization.string().optional(),
    yearOfBirth: core.serialization.number().optional(),
    searchTerm: core.serialization.string().optional(),
});

export declare namespace SanctionsHitContext {
    interface Raw {
        entity: serializers.SanctionsScreeningEntity.Raw;
        entityType?: serializers.SanctionsDetailsEntityType.Raw | null;
        userId?: string | null;
        transactionId?: string | null;
        ruleInstanceId?: string | null;
        iban?: string | null;
        yearOfBirth?: number | null;
        searchTerm?: string | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const RuleHitMeta: core.serialization.ObjectSchema<serializers.RuleHitMeta.Raw, Flagright.RuleHitMeta> =
    core.serialization.object({
        hitDirections: core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).RuleHitDirection))
            .optional(),
        falsePositiveDetails: core.serialization
            .lazyObject(async () => (await import("..")).FalsePositiveDetails)
            .optional(),
        sanctionsDetails: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).SanctionsDetails))
            .optional(),
        isOngoingScreeningHit: core.serialization.boolean().optional(),
    });

export declare namespace RuleHitMeta {
    interface Raw {
        hitDirections?: serializers.RuleHitDirection.Raw[] | null;
        falsePositiveDetails?: serializers.FalsePositiveDetails.Raw | null;
        sanctionsDetails?: serializers.SanctionsDetails.Raw[] | null;
        isOngoingScreeningHit?: boolean | null;
    }
}

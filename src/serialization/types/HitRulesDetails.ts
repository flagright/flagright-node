/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const HitRulesDetails: core.serialization.ObjectSchema<
    serializers.HitRulesDetails.Raw,
    Flagright.HitRulesDetails
> = core.serialization.object({
    ruleId: core.serialization.string().optional(),
    ruleInstanceId: core.serialization.string(),
    ruleName: core.serialization.string(),
    ruleDescription: core.serialization.string(),
    executedAt: core.serialization.number().optional(),
    ruleAction: core.serialization.lazy(async () => (await import("..")).RuleAction),
    ruleHitMeta: core.serialization.lazyObject(async () => (await import("..")).RuleHitMeta).optional(),
    labels: core.serialization.list(core.serialization.lazy(async () => (await import("..")).RuleLabels)).optional(),
    nature: core.serialization.lazy(async () => (await import("..")).RuleNature).optional(),
    isShadow: core.serialization.boolean().optional(),
});

export declare namespace HitRulesDetails {
    interface Raw {
        ruleId?: string | null;
        ruleInstanceId: string;
        ruleName: string;
        ruleDescription: string;
        executedAt?: number | null;
        ruleAction: serializers.RuleAction.Raw;
        ruleHitMeta?: serializers.RuleHitMeta.Raw | null;
        labels?: serializers.RuleLabels.Raw[] | null;
        nature?: serializers.RuleNature.Raw | null;
        isShadow?: boolean | null;
    }
}

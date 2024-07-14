/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const SanctionsScreeningEntity: core.serialization.Schema<
    serializers.SanctionsScreeningEntity.Raw,
    Flagright.SanctionsScreeningEntity
> = core.serialization.enum_(["USER", "BANK", "IBAN", "EXTERNAL_USER"]);

export declare namespace SanctionsScreeningEntity {
    type Raw = "USER" | "BANK" | "IBAN" | "EXTERNAL_USER";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface SanctionsHitContext {
    entity: Flagright.SanctionsScreeningEntity;
    entityType?: Flagright.SanctionsDetailsEntityType;
    userId?: string;
    transactionId?: string;
    ruleInstanceId?: string;
    iban?: string;
    yearOfBirth?: number;
    searchTerm?: string;
}

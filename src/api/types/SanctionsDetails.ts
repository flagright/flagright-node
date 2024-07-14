/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "..";

export interface SanctionsDetails {
    name: string;
    searchId: string;
    iban?: string;
    entityType?: Flagright.SanctionsDetailsEntityType;
    sanctionHitIds?: string[];
    hitContext?: Flagright.SanctionsHitContext;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CardDetailsCardFunding: core.serialization.Schema<
    serializers.CardDetailsCardFunding.Raw,
    Flagright.CardDetailsCardFunding
> = core.serialization.enum_(["CREDIT", "DEBIT", "PREPAID"]);

export declare namespace CardDetailsCardFunding {
    type Raw = "CREDIT" | "DEBIT" | "PREPAID";
}
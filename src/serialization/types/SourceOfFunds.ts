/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const SourceOfFunds: core.serialization.Schema<serializers.SourceOfFunds.Raw, Flagright.SourceOfFunds> =
    core.serialization.enum_([
        "Earnings",
        "Savings",
        "Investments/Deposits",
        "Wealth",
        "Gift",
        "Pension",
        "Inheritance",
        "Gambling",
        "Benefits",
        "Passive",
        "Family",
        "Insurance",
        "Legal",
        "Sales",
        "Rollover",
    ]);

export declare namespace SourceOfFunds {
    type Raw =
        | "Earnings"
        | "Savings"
        | "Investments/Deposits"
        | "Wealth"
        | "Gift"
        | "Pension"
        | "Inheritance"
        | "Gambling"
        | "Benefits"
        | "Passive"
        | "Family"
        | "Insurance"
        | "Legal"
        | "Sales"
        | "Rollover";
}

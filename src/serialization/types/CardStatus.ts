/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CardStatus: core.serialization.Schema<serializers.CardStatus.Raw, Flagright.CardStatus> =
    core.serialization.enum_(["ACTIVE", "FROZEN", "BLOCKED", "SUSPECTED_FRAUD", "STOLEN", "LOST", "CLOSED", "OTHER"]);

export declare namespace CardStatus {
    type Raw = "ACTIVE" | "FROZEN" | "BLOCKED" | "SUSPECTED_FRAUD" | "STOLEN" | "LOST" | "CLOSED" | "OTHER";
}

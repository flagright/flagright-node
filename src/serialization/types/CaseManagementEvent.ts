/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Flagright from "../../api";
import * as core from "../../core";

export const CaseManagementEvent: core.serialization.ObjectSchema<
    serializers.CaseManagementEvent.Raw,
    Flagright.CaseManagementEvent
> = core.serialization.object({
    caseStatus: core.serialization.lazy(async () => (await import("..")).CaseManagementEventCaseStatus),
    timestamp: core.serialization.number(),
    caseStatusReason: core.serialization.lazy(async () => (await import("..")).CaseManagementEventCaseStatusReason),
    transactionId: core.serialization.string().optional(),
    userId: core.serialization.string().optional(),
    eventId: core.serialization.string().optional(),
    caseStatusReasonDescription: core.serialization.string().optional(),
});

export declare namespace CaseManagementEvent {
    interface Raw {
        caseStatus: serializers.CaseManagementEventCaseStatus.Raw;
        timestamp: number;
        caseStatusReason: serializers.CaseManagementEventCaseStatusReason.Raw;
        transactionId?: string | null;
        userId?: string | null;
        eventId?: string | null;
        caseStatusReasonDescription?: string | null;
    }
}
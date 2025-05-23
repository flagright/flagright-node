/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Flagright from "../../api/index";
import * as core from "../../core";
import { Amount } from "./Amount";
import { Address } from "./Address";
import { EmailId } from "./EmailId";
import { Tag } from "./Tag";

export const AchDetails: core.serialization.ObjectSchema<serializers.AchDetails.Raw, Flagright.AchDetails> =
    core.serialization.object({
        routingNumber: core.serialization.string().optional(),
        accountNumber: core.serialization.string().optional(),
        accountBalance: Amount.optional(),
        bankName: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        bankAddress: Address.optional(),
        beneficiaryName: core.serialization.string().optional(),
        emailId: EmailId.optional(),
        tags: core.serialization.list(Tag).optional(),
    });

export declare namespace AchDetails {
    export interface Raw {
        routingNumber?: string | null;
        accountNumber?: string | null;
        accountBalance?: Amount.Raw | null;
        bankName?: string | null;
        name?: string | null;
        bankAddress?: Address.Raw | null;
        beneficiaryName?: string | null;
        emailId?: EmailId.Raw | null;
        tags?: Tag.Raw[] | null;
    }
}

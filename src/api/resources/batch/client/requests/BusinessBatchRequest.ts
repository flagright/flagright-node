/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../../../..";

/**
 * @example
 *     {
 *         data: [{
 *                 userId: "userId",
 *                 createdTimestamp: 1.1,
 *                 legalEntity: {
 *                     companyGeneralDetails: {
 *                         legalName: "Ozkan Hazelnut Export JSC",
 *                         businessIndustry: ["Farming"],
 *                         mainProductsServicesSold: ["Hazelnut"]
 *                     }
 *                 }
 *             }]
 *     }
 */
export interface BusinessBatchRequest {
    batchId?: string;
    data: Flagright.Business[];
}

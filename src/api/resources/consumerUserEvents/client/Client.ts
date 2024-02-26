/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace ConsumerUserEvents {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class ConsumerUserEvents {
    constructor(protected readonly _options: ConsumerUserEvents.Options) {}

    /**
     * ## POST Consumer User Events
     *
     * `/events/consumer/user` endpoint allows you to operate on the Consumer User Events entity.
     *
     * User events are created after the initial `POST /consumer/users` call (which creates a user) and are used to:
     *
     * - Update the STATE and KYC Status of the user, using the `userStateDetails` or `kycStatusDetails` field
     * - Update the user details, using the `updatedConsumerUserAttributes` field.
     *
     * > If you have neither of the above two use cases, you do not need to use user events.
     *
     * ### Payload
     *
     * Each user event needs three mandatory fields:
     *
     * - `timestamp`- the timestamp of when the event was created or occured in your system
     * - `userId` - The ID of the transaction for which this event is generated.
     *
     * In order to make individual events retrievable, you also need to pass in a unique `eventId` to the request body.
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.consumerUserEvents.create({
     *         timestamp: 1.1,
     *         userId: "userId",
     *         updatedConsumerUserAttributes: {
     *             userDetails: {
     *                 name: {
     *                     firstName: "Baran",
     *                     middleName: "Realblood",
     *                     lastName: "Ozkan"
     *                 },
     *                 dateOfBirth: "1991-01-01",
     *                 countryOfResidence: Flagright.CountryCode.Us,
     *                 countryOfNationality: Flagright.CountryCode.De
     *             },
     *             legalDocuments: [{
     *                     documentType: "passport",
     *                     documentNumber: "Z9431P",
     *                     documentIssuedDate: 1639939034000,
     *                     documentExpirationDate: 1839939034000,
     *                     documentIssuedCountry: Flagright.CountryCode.De,
     *                     tags: [{
     *                             key: "customerType",
     *                             value: "wallet"
     *                         }, {
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }],
     *                     nameOnDocument: {
     *                         firstName: "Baran",
     *                         middleName: "Realblood",
     *                         lastName: "Ozkan"
     *                     }
     *                 }, {
     *                     documentType: "passport",
     *                     documentNumber: "Z9431P",
     *                     documentIssuedDate: 1639939034000,
     *                     documentExpirationDate: 1839939034000,
     *                     documentIssuedCountry: Flagright.CountryCode.De,
     *                     tags: [{
     *                             key: "customerType",
     *                             value: "wallet"
     *                         }, {
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }],
     *                     nameOnDocument: {
     *                         firstName: "Baran",
     *                         middleName: "Realblood",
     *                         lastName: "Ozkan"
     *                     }
     *                 }],
     *             contactDetails: {
     *                 emailIds: ["baran@flagright.com", "emailIds"],
     *                 contactNumbers: ["+37112345432", "contactNumbers"],
     *                 websites: ["flagright.com", "websites"],
     *                 addresses: [{
     *                         addressLines: ["Klara-Franke Str 20"],
     *                         postcode: "10557",
     *                         city: "Berlin",
     *                         state: "Berlin",
     *                         country: "Germany",
     *                         tags: [{
     *                                 key: "customKey",
     *                                 value: "customValue"
     *                             }, {
     *                                 key: "customKey",
     *                                 value: "customValue"
     *                             }]
     *                     }, {
     *                         addressLines: ["Klara-Franke Str 20"],
     *                         postcode: "10557",
     *                         city: "Berlin",
     *                         state: "Berlin",
     *                         country: "Germany",
     *                         tags: [{
     *                                 key: "customKey",
     *                                 value: "customValue"
     *                             }, {
     *                                 key: "customKey",
     *                                 value: "customValue"
     *                             }]
     *                     }]
     *             },
     *             transactionLimits: {
     *                 maximumDailyTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 },
     *                 maximumWeeklyTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 },
     *                 maximumMonthlyTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 },
     *                 maximumQuarterlyTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 },
     *                 maximumTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 },
     *                 maximumYearlyTransactionLimit: {
     *                     amountValue: 800,
     *                     amountCurrency: Flagright.CurrencyCode.Gbp
     *                 }
     *             },
     *             tags: [{
     *                     key: "customKey",
     *                     value: "customValue"
     *                 }, {
     *                     key: "customKey",
     *                     value: "customValue"
     *                 }]
     *         }
     *     })
     */
    public async create(
        request: Flagright.ConsumerUserEvent,
        requestOptions?: ConsumerUserEvents.RequestOptions
    ): Promise<Flagright.UserWithRulesResult> {
        const { allowUserTypeConversion, ..._body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (allowUserTypeConversion != null) {
            _queryParams["allowUserTypeConversion"] = allowUserTypeConversion;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                "events/consumer/user"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.4.6",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ConsumerUserEvent.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.UserWithRulesResult.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Flagright.BadRequestError(_response.error.body);
                case 401:
                    throw new Flagright.UnauthorizedError(_response.error.body);
                case 429:
                    throw new Flagright.TooManyRequestsError(_response.error.body);
                default:
                    throw new errors.FlagrightError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FlagrightError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FlagrightTimeoutError();
            case "unknown":
                throw new errors.FlagrightError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

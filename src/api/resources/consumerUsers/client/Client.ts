/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace ConsumerUsers {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class ConsumerUsers {
    constructor(protected readonly _options: ConsumerUsers.Options) {}

    /**
     * ## POST Consumer User
     *
     * `/consumer/user` endpoint allows you to operate on the Consumer user entity.
     *
     * In order to pass the payload of a User to Flagright and verify the User, you will need to call this endpoint with the User payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.
     *
     * ### Payload
     *
     * Each consumer user needs two mandatory fields:
     *
     * - `userId` - Unique identifier for the user
     * - `createdTimestamp` - UNIX timestamp in _milliseconds_ for when the User is created in your system
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.consumerUsers.create({
     *         userDetails: {
     *             name: {
     *                 firstName: "Baran",
     *                 middleName: "Realblood",
     *                 lastName: "Ozkan"
     *             },
     *             dateOfBirth: "1991-01-01",
     *             countryOfResidence: Flagright.CountryCode.Us,
     *             countryOfNationality: Flagright.CountryCode.De
     *         },
     *         legalDocuments: [{
     *                 documentType: "passport",
     *                 documentNumber: "Z9431P",
     *                 documentIssuedDate: 1639939034000,
     *                 documentExpirationDate: 1839939034000,
     *                 documentIssuedCountry: Flagright.CountryCode.De,
     *                 tags: [{
     *                         key: "customerType",
     *                         value: "wallet"
     *                     }, {
     *                         key: "customKey",
     *                         value: "customValue"
     *                     }],
     *                 nameOnDocument: {
     *                     firstName: "Baran",
     *                     middleName: "Realblood",
     *                     lastName: "Ozkan"
     *                 }
     *             }, {
     *                 documentType: "passport",
     *                 documentNumber: "Z9431P",
     *                 documentIssuedDate: 1639939034000,
     *                 documentExpirationDate: 1839939034000,
     *                 documentIssuedCountry: Flagright.CountryCode.De,
     *                 tags: [{
     *                         key: "customerType",
     *                         value: "wallet"
     *                     }, {
     *                         key: "customKey",
     *                         value: "customValue"
     *                     }],
     *                 nameOnDocument: {
     *                     firstName: "Baran",
     *                     middleName: "Realblood",
     *                     lastName: "Ozkan"
     *                 }
     *             }],
     *         contactDetails: {
     *             emailIds: ["baran@flagright.com", "emailIds"],
     *             contactNumbers: ["+37112345432", "contactNumbers"],
     *             websites: ["flagright.com", "websites"],
     *             addresses: [{
     *                     addressLines: ["Klara-Franke Str 20"],
     *                     postcode: "10557",
     *                     city: "Berlin",
     *                     state: "Berlin",
     *                     country: "Germany",
     *                     tags: [{
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }, {
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }]
     *                 }, {
     *                     addressLines: ["Klara-Franke Str 20"],
     *                     postcode: "10557",
     *                     city: "Berlin",
     *                     state: "Berlin",
     *                     country: "Germany",
     *                     tags: [{
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }, {
     *                             key: "customKey",
     *                             value: "customValue"
     *                         }]
     *                 }]
     *         },
     *         transactionLimits: {
     *             maximumDailyTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             },
     *             maximumWeeklyTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             },
     *             maximumMonthlyTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             },
     *             maximumQuarterlyTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             },
     *             maximumTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             },
     *             maximumYearlyTransactionLimit: {
     *                 amountValue: 800,
     *                 amountCurrency: Flagright.CurrencyCode.Gbp
     *             }
     *         },
     *         tags: [{
     *                 key: "customKey",
     *                 value: "customValue"
     *             }, {
     *                 key: "customKey",
     *                 value: "customValue"
     *             }],
     *         userId: "96647cfd9e8fe66ee0f3362e011e34e8",
     *         createdTimestamp: 1641654664000
     *     })
     */
    public async create(
        request: Flagright.User,
        requestOptions?: ConsumerUsers.RequestOptions
    ): Promise<Flagright.ConsumerUsersCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                "consumer/users"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.4.8",
            },
            contentType: "application/json",
            body: await serializers.User.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ConsumerUsersCreateResponse.parseOrThrow(_response.body, {
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

    /**
     * ### GET Consumer User
     *
     * `/consumer/user` endpoint allows you to operate on the Consumer User entity.
     *
     * Calling `GET /consumer/user/{userId}` will return the entire user payload and rule execution results for the user with the corresponding `userId`
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.consumerUsers.get("userId")
     */
    public async get(userId: string, requestOptions?: ConsumerUsers.RequestOptions): Promise<Flagright.UserResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                `consumer/users/${userId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.4.8",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.UserResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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

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
     * * `userId` - Unique identifier for the user
     * * `createdTimestamp` - UNIX timestamp in *milliseconds* for when the User is created in your system
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.consumerUsers.create({
     *         body: {
     *             userId: "96647cfd9e8fe66ee0f3362e011e34e8",
     *             createdTimestamp: 1641654664000,
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
     *                         }]
     *                 }],
     *             contactDetails: {
     *                 emailIds: ["baran@flagright.com"],
     *                 contactNumbers: ["+37112345432"],
     *                 websites: ["flagright.com"],
     *                 addresses: [{
     *                         addressLines: ["Klara-Franke Str 20"],
     *                         postcode: "10557",
     *                         city: "Berlin",
     *                         state: "Berlin",
     *                         country: "Germany",
     *                         tags: [{
     *                                 key: "customKey",
     *                                 value: "customValue"
     *                             }]
     *                     }]
     *             },
     *             tags: [{
     *                     key: "customKey",
     *                     value: "customValue"
     *                 }]
     *         }
     *     })
     */
    public async create(
        request: Flagright.ConsumerUsersCreateRequest,
        requestOptions?: ConsumerUsers.RequestOptions
    ): Promise<Flagright.ConsumerUsersCreateResponse> {
        const { lockCraRiskLevel, lockKycRiskLevel, validateUserId, krsOnly, body: _body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (lockCraRiskLevel != null) {
            _queryParams["lockCraRiskLevel"] = lockCraRiskLevel;
        }

        if (lockKycRiskLevel != null) {
            _queryParams["lockKycRiskLevel"] = lockKycRiskLevel;
        }

        if (validateUserId != null) {
            _queryParams["validateUserId"] = validateUserId;
        }

        if (krsOnly != null) {
            _queryParams["_krsOnly"] = krsOnly;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                "consumer/users"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.6.48",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.User.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
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
                    throw new Flagright.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Flagright.UnauthorizedError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Flagright.TooManyRequestsError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.consumerUsers.get("userId")
     */
    public async get(
        userId: string,
        requestOptions?: ConsumerUsers.RequestOptions
    ): Promise<Flagright.UserWithRulesResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                `consumer/users/${userId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.6.48",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
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
                    throw new Flagright.BadRequestError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Flagright.UnauthorizedError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Flagright.TooManyRequestsError(
                        await serializers.ApiErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace BusinessUserEvents {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class BusinessUserEvents {
    constructor(protected readonly _options: BusinessUserEvents.Options) {}

    /**
     * ## POST Business User Events
     *
     * `/events/business/user` endpoint allows you to operate on the Business User Events entity.
     *
     * User events are created after the initial `POST /business/users` call (which creates a user) and are used to:
     *
     * - Update the STATE and KYC Status of the user, using the `userStateDetails` or `kycStatusDetails` field
     * - Update the user details, using the `updatedBusinessUserAttributes` field.
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
     * @throws {@link Flagright.ConflictError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.businessUserEvents.create({
     *         body: {
     *             timestamp: 1.1,
     *             userId: "userId"
     *         }
     *     })
     */
    public async create(
        request: Flagright.BusinessUserEventsCreateRequest,
        requestOptions?: BusinessUserEvents.RequestOptions
    ): Promise<Flagright.BusinessWithRulesResult> {
        const { allowUserTypeConversion, lockCraRiskLevel, body: _body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (allowUserTypeConversion != null) {
            _queryParams["allowUserTypeConversion"] = allowUserTypeConversion;
        }

        if (lockCraRiskLevel != null) {
            _queryParams["lockCraRiskLevel"] = lockCraRiskLevel;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                "events/business/user"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.6.34",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.BusinessUserEvent.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BusinessWithRulesResult.parseOrThrow(_response.body, {
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
                case 409:
                    throw new Flagright.ConflictError(
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
     * ### GET a Business User Event
     *
     * You can retrieve any business user event you created using the [POST Business User Events](/api-reference/api-reference/business-user-events/create) call.
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.businessUserEvents.get("eventId")
     */
    public async get(
        eventId: string,
        requestOptions?: BusinessUserEvents.RequestOptions
    ): Promise<Flagright.BusinessUserEventWithRulesResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                `events/business/user/${eventId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.6.34",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BusinessUserEventWithRulesResult.parseOrThrow(_response.body, {
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

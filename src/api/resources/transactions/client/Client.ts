/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Transactions {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Transactions {
    constructor(protected readonly _options: Transactions.Options) {}

    /**
     * ## POST Transactions
     *
     * `/transactions` endpoint allows you to operate on the [Transaction entity.](/guides/overview/entities#transaction)
     *
     * In order to pass the payload of a transaction to Flagright and verify the transaction, you will need to call this endpoint with the transaction payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.
     *
     *
     * ### Payload
     *
     * Here are some of the most used payload fields explained (you can find the full payload [schema below](/api-reference/api-reference/transactions/verify#request) with 1 line descriptions):
     *
     * * `type`: Type of transaction (Ex: `WITHDRAWAL`, `DEPOSIT`, `TRANSFER` etc).
     * * `transactionId` - Unique Identifier for the transaction.
     * * `timestamp` - UNIX timestamp in *milliseconds* of when the transaction took place
     * * `transactionState` - The state of the transaction, set to `CREATED` by default. [More details here](/guides/overview/entities#transaction-lifecycle-through-transaction-events)
     * * `originUserId` - Unique identifier (if any) of the user who is sending the money. This user must be created within the Flagright system before using the [create a consumer user](/api-reference/api-reference/consumer-users/create) or [create a business user](/api-reference/api-reference/business-users/create) endpoint
     * * `destinationUserId` - Unique identifier (if any) of the user who is receiving the money. This user must be created within the Flagright system before using the [create a consumer user](/api-reference/api-reference/consumer-users/create) or [create a business user](/api-reference/api-reference/business-users/create) endpoint
     * * `originAmountDetails` - Details of the amount being sent from the origin
     * * `destinationAmountDetails` - Details of the amount being received at the destination
     * * `originPaymentDetails` - Payment details (if any) used at the origin (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
     * * `destinationPaymentDetails` - Payment details (if any) used at the destination (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.transactions.verify({
     *         body: {
     *             type: Flagright.TransactionType.Deposit,
     *             transactionId: "7b80a539eea6e78acbd6d458e5971482",
     *             timestamp: 1641654664000,
     *             originUserId: "8650a2611d0771cba03310f74bf6",
     *             destinationUserId: "9350a2611e0771cba03310f74bf6",
     *             originAmountDetails: {
     *                 transactionAmount: 800,
     *                 transactionCurrency: Flagright.CurrencyCode.Eur,
     *                 country: Flagright.CountryCode.De
     *             },
     *             destinationAmountDetails: {
     *                 transactionAmount: 68351.34,
     *                 transactionCurrency: Flagright.CurrencyCode.Inr,
     *                 country: Flagright.CountryCode.In
     *             },
     *             originPaymentDetails: {
     *                 method: "CASH"
     *             },
     *             destinationPaymentDetails: {
     *                 method: "CASH"
     *             },
     *             promotionCodeUsed: true,
     *             reference: "loan repayment",
     *             originDeviceData: {
     *                 batteryLevel: 95,
     *                 deviceLatitude: 13.0033,
     *                 deviceLongitude: 76.1004,
     *                 ipAddress: "10.23.191.2",
     *                 deviceIdentifier: "3c49f915d04485e34caba",
     *                 vpnUsed: false,
     *                 operatingSystem: "Android 11.2",
     *                 deviceMaker: "ASUS",
     *                 deviceModel: "Zenphone M2 Pro Max",
     *                 deviceYear: "2018",
     *                 appVersion: "1.1.0"
     *             },
     *             destinationDeviceData: {
     *                 batteryLevel: 95,
     *                 deviceLatitude: 13.0033,
     *                 deviceLongitude: 76.1004,
     *                 ipAddress: "10.23.191.2",
     *                 deviceIdentifier: "3c49f915d04485e34caba",
     *                 vpnUsed: false,
     *                 operatingSystem: "Android 11.2",
     *                 deviceMaker: "ASUS",
     *                 deviceModel: "Zenphone M2 Pro Max",
     *                 deviceYear: "2018",
     *                 appVersion: "1.1.0"
     *             },
     *             tags: [{
     *                     key: "customKey",
     *                     value: "customValue"
     *                 }]
     *         }
     *     })
     */
    public async verify(
        request: Flagright.TransactionsVerifyRequest,
        requestOptions?: Transactions.RequestOptions
    ): Promise<Flagright.TransactionsVerifyResponse> {
        const {
            validateOriginUserId,
            validateDestinationUserId,
            validateTransactionId,
            trsOnly,
            body: _body,
        } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (validateOriginUserId != null) {
            _queryParams["validateOriginUserId"] = validateOriginUserId;
        }

        if (validateDestinationUserId != null) {
            _queryParams["validateDestinationUserId"] = validateDestinationUserId;
        }

        if (validateTransactionId != null) {
            _queryParams["validateTransactionId"] = validateTransactionId;
        }

        if (trsOnly != null) {
            _queryParams["_trsOnly"] = trsOnly;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                "transactions"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "v1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.Transaction.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.TransactionsVerifyResponse.parseOrThrow(_response.body, {
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
     * ### GET Transactions
     *
     * `/transactions` endpoint allows you to operate on the [Transaction entity](/guides/overview/entities#transaction).
     *
     * Calling `GET /transactions/{transactionId}` will return the entire transaction payload and rule execution results for the transaction with the corresponding `transactionId`
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.transactions.get("transactionId")
     */
    public async get(
        transactionId: string,
        requestOptions?: Transactions.RequestOptions
    ): Promise<Flagright.TransactionWithRulesResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ??
                    environments.FlagrightEnvironment.SandboxApiServerEu1,
                `transactions/${transactionId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "v1.7.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.TransactionWithRulesResult.parseOrThrow(_response.body, {
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

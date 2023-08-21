/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
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
    }
}

export class Transactions {
    constructor(protected readonly _options: Transactions.Options) {}

    /**
     * ## POST Transactions
     *
     * `/transactions` endpoint allows you to operate on the [Transaction entity.](https://docs.flagright.com/docs/flagright-api/8c06ae6a3231a-entities-and-relationships#transaction)
     *
     * In order to pass the payload of a transaction to Flagright and verify the transaciton, you will need to call this endpoint with the transaction payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.
     *
     *
     * ### Payload
     *
     * Here are some of the most used payload fields explained (you can find the full payload [schema below](https://docs.flagright.com/docs/flagright-api/87742ed31b30e-verify-a-transaction#request-body) with 1 line descriptions):
     *
     * * `type`: Type of transaction (Ex: `WITHDRAWAL`, `DEPOSIT`, `TRANSFER` etc).
     * * `transactionId` - Unique Identifier for the transaction. Flagright API will generate a `transactionId` if this field is left empty
     * * `timestamp` - UNIX timestamp in *milliseconds* of when the transaction took place
     * * `transactionState` - The state of the transaction, set to `CREATED` by default. [More details here](https://docs.flagright.com/docs/flagright-api/8c06ae6a3231a-entities-and-relationships-in-the-api#transaction-lifecycle-through-transaction-events)
     * * `originUserId` - Unique identifier (if any) of the user who is sending the money. This user must be created within the Flagright system before using the [create a consumer user](https://docs.flagright.com/docs/flagright-api/18132cd454603-create-a-consumer-user) or [create a business user](https://docs.flagright.com/docs/flagright-api/f651463db29d8-create-a-business-user) endpoint
     * * `destinationUserId` - Unique identifier (if any) of the user who is receiving the money. This user must be created within the Flagright system before using the [create a consumer user](https://docs.flagright.com/docs/flagright-api/18132cd454603-create-a-consumer-user) or [create a business user](https://docs.flagright.com/docs/flagright-api/f651463db29d8-create-a-business-user) endpoint
     * * `originAmountDetails` - Details of the amount being sent from the origin
     * * `destinationAmountDetails` - Details of the amount being received at the destination
     * * `originPaymentDetails` - Payment details (if any) used at the origin (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
     * * `destinationPaymentDetails` - Payment details (if any) used at the destination (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     */
    public async verify(
        request: Flagright.TransactionsVerifyRequest,
        requestOptions?: Transactions.RequestOptions
    ): Promise<Flagright.TransactionsVerifyResponse> {
        const { validateOriginUserId, validateDestinationUserId, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (validateOriginUserId != null) {
            _queryParams.append("validateOriginUserId", validateOriginUserId);
        }

        if (validateDestinationUserId != null) {
            _queryParams.append("validateDestinationUserId", validateDestinationUserId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                "transactions"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.0.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.Transaction.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
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
     * ### GET Transactions
     *
     * `/transactions` endpoint allows you to operate on the [Transaction entity](https://docs.flagright.com/docs/flagright-api/8c06ae6a3231a-entities-and-relationships#transaction).
     *
     * Calling `GET /transactions/{transactionId}` will return the entire transaction payload and rule execution results for the transaction with the corresponding `transactionId`
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     */
    public async get(
        transactionId: string,
        requestOptions?: Transactions.RequestOptions
    ): Promise<Flagright.TransactionWithRulesResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                `transactions/${transactionId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.0.2",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
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

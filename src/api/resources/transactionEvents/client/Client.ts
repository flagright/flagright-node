/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace TransactionEvents {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class TransactionEvents {
    constructor(protected readonly _options: TransactionEvents.Options) {}

    /**
     * ## POST Transaction Events
     *
     * `/events/transaction` endpoint allows you to operate on the [Transaction Events entity.](https://docs.flagright.com/docs/flagright-api/0f8fac59d1995-entities-and-relationships#transaction-event)
     *
     * Transaction events are created after the initial `POST /transactions` call (which creates a transaction) and are used to:
     *
     * * Update the STATE of the transaction, using the `transactionState` field and manage the [Transaction Lifecycle](https://docs.flagright.com/docs/flagright-api/0f8fac59d1995-entities-and-relationships#transaction-lifecycle-through-transaction-events)
     * * Update the transaction details, using the `updatedTransactionAttributes` field.
     *
     * > If you have neither of the above two use cases, you do not need to use transaction events.
     *
     * ### Payload
     *
     * Each transaction event needs three mandatory fields:
     *
     * * `transactionState` - STATE of the transaction -> value is set to `CREATED` after `POST /transactions` call
     * * `timestamp`- the timestamp of when the event was created or occured in your system
     * * `transactionId` - The ID of the transaction for which this event is generated.
     *
     * In order to make individual events retrievable, you also need to pass in a unique `eventId` to the request body.
     *
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     */
    public async create(
        request: Flagright.TransactionEvent,
        requestOptions?: TransactionEvents.RequestOptions
    ): Promise<Flagright.TransactionEventMonitoringResult> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                "events/transaction"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.1.1",
            },
            contentType: "application/json",
            body: await serializers.TransactionEvent.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.TransactionEventMonitoringResult.parseOrThrow(_response.body, {
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
     * ### GET Transaction Events
     *
     * `/events/transaction` endpoint allows you to operate on the [Transaction Events entity.](https://docs.flagright.com/docs/flagright-api/0f8fac59d1995-entities-and-relationships#transaction-event).
     *
     * You can retrieve any transaction event you create using the [POST Transaction Events](https://docs.flagright.com/docs/flagright-api/d7c4dc4d02850-create-a-transaction-event) call.
     *
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     */
    public async get(
        eventId: string,
        requestOptions?: TransactionEvents.RequestOptions
    ): Promise<Flagright.TransactionEvent> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                `events/transaction/${eventId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.1.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.TransactionEvent.parseOrThrow(_response.body, {
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

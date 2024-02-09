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
     *         allowUserTypeConversion: Flagright.BooleanString.True,
     *         timestamp: 1.1,
     *         userId: "string",
     *         updatedConsumerUserAttributes: {
     *             userDetails: {
     *                 name: {
     *                     firstName: "string"
     *                 },
     *                 countryOfResidence: Flagright.CountryCode.Af,
     *                 countryOfNationality: Flagright.CountryCode.Af,
     *                 gender: Flagright.Gender.M
     *             },
     *             userStateDetails: {
     *                 state: Flagright.UserState.Unacceptable
     *             },
     *             kycStatusDetails: {
     *                 status: Flagright.KycStatus.Successful
     *             },
     *             employmentStatus: Flagright.EmploymentStatus.Unemployed,
     *             legalDocuments: [{
     *                     documentType: "string",
     *                     documentNumber: "string",
     *                     documentIssuedCountry: Flagright.CountryCode.Af,
     *                     tags: [{
     *                             key: "string",
     *                             value: "string"
     *                         }],
     *                     nameOnDocument: {
     *                         firstName: "string"
     *                     }
     *                 }],
     *             contactDetails: {
     *                 addresses: [{
     *                         addressLines: [],
     *                         city: "string",
     *                         country: "string",
     *                         tags: [{
     *                                 key: "string",
     *                                 value: "string"
     *                             }]
     *                     }]
     *             },
     *             transactionLimits: {
     *                 maximumDailyTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 maximumWeeklyTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 maximumMonthlyTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 maximumQuarterlyTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 maximumTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 maximumYearlyTransactionLimit: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 paymentMethodLimits: {
     *                     ach: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     card: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     iban: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     upi: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     genericBankAccount: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     mpesa: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     swift: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     wallet: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     },
     *                     check: {
     *                         transactionCountLimit: {},
     *                         transactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         },
     *                         averageTransactionAmountLimit: {
     *                             day: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             week: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             month: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             },
     *                             year: {
     *                                 amountValue: 1.1,
     *                                 amountCurrency: Flagright.CurrencyCode.OneInch
     *                             }
     *                         }
     *                     }
     *                 }
     *             },
     *             riskLevel: Flagright.RiskLevel.VeryHigh,
     *             acquisitionChannel: Flagright.AcquisitionChannel.Organic,
     *             sourceOfFunds: [Flagright.SourceOfFunds.Earnings],
     *             userSegment: Flagright.ConsumerUserSegment.Retail,
     *             pepStatus: [{
     *                     isPepHit: true
     *                 }],
     *             tags: [{
     *                     key: "string",
     *                     value: "string"
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
                "X-Fern-SDK-Version": "1.3.6",
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

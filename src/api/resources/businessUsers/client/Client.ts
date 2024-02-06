/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Flagright from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace BusinessUsers {
    interface Options {
        environment?: core.Supplier<environments.FlagrightEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class BusinessUsers {
    constructor(protected readonly _options: BusinessUsers.Options) {}

    /**
     * ## POST Business User
     *
     * `/business/user` endpoint allows you to operate on the [Business user entity.](https://docs.flagright.com/docs/flagright-api/0f8fac59d1995-entities-and-relationships#user)
     *
     * In order to pass the payload of a User to Flagright and verify the User, you will need to call this endpoint with the User payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.
     *
     * ### Payload
     *
     * Each consumer Business entity needs three mandatory fields:
     *
     * - `userId` - Unique identifier for the user
     * - `legalEntity` - Details of the business legal entity (CompanyGeneralDetails, FinancialDetails etc) - only `legalName`in `CompanyGeneralDetails` is mandatory
     * - `createdTimestamp` - UNIX timestamp in _milliseconds_ for when the User is created in your system
     * @throws {@link Flagright.BadRequestError}
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.businessUsers.create({
     *         userStateDetails: {
     *             state: Flagright.UserState.Unacceptable
     *         },
     *         kycStatusDetails: {
     *             status: Flagright.KycStatus.Successful
     *         },
     *         legalEntity: {
     *             companyGeneralDetails: {
     *                 legalName: "string",
     *                 userSegment: Flagright.BusinessUserSegment.SoleProprietorship,
     *                 userRegistrationStatus: Flagright.UserRegistrationStatus.Registered,
     *                 tags: [{
     *                         key: "string",
     *                         value: "string"
     *                     }]
     *             },
     *             companyFinancialDetails: {
     *                 expectedTransactionAmountPerMonth: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 expectedTurnoverPerMonth: {
     *                     amountValue: 1.1,
     *                     amountCurrency: Flagright.CurrencyCode.OneInch
     *                 },
     *                 tags: [{
     *                         key: "string",
     *                         value: "string"
     *                     }]
     *             },
     *             companyRegistrationDetails: {
     *                 registrationIdentifier: "string",
     *                 registrationCountry: Flagright.CountryCode.Af,
     *                 tags: [{
     *                         key: "string",
     *                         value: "string"
     *                     }]
     *             },
     *             sourceOfFunds: [Flagright.SourceOfFunds.Earnings],
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
     *             }
     *         },
     *         shareHolders: [{
     *                 generalDetails: {
     *                     name: {
     *                         firstName: "string"
     *                     },
     *                     countryOfResidence: Flagright.CountryCode.Af,
     *                     countryOfNationality: Flagright.CountryCode.Af,
     *                     gender: Flagright.Gender.M
     *                 },
     *                 legalDocuments: [{
     *                         documentType: "string",
     *                         documentNumber: "string",
     *                         documentIssuedCountry: Flagright.CountryCode.Af,
     *                         tags: [{
     *                                 key: "string",
     *                                 value: "string"
     *                             }],
     *                         nameOnDocument: {
     *                             firstName: "string"
     *                         }
     *                     }],
     *                 contactDetails: {
     *                     addresses: [{
     *                             addressLines: [],
     *                             city: "string",
     *                             country: "string",
     *                             tags: [{
     *                                     key: "string",
     *                                     value: "string"
     *                                 }]
     *                         }]
     *                 },
     *                 pepStatus: [{
     *                         isPepHit: true
     *                     }],
     *                 tags: [{
     *                         key: "string",
     *                         value: "string"
     *                     }]
     *             }],
     *         directors: [{
     *                 generalDetails: {
     *                     name: {
     *                         firstName: "string"
     *                     },
     *                     countryOfResidence: Flagright.CountryCode.Af,
     *                     countryOfNationality: Flagright.CountryCode.Af,
     *                     gender: Flagright.Gender.M
     *                 },
     *                 legalDocuments: [{
     *                         documentType: "string",
     *                         documentNumber: "string",
     *                         documentIssuedCountry: Flagright.CountryCode.Af,
     *                         tags: [{
     *                                 key: "string",
     *                                 value: "string"
     *                             }],
     *                         nameOnDocument: {
     *                             firstName: "string"
     *                         }
     *                     }],
     *                 contactDetails: {
     *                     addresses: [{
     *                             addressLines: [],
     *                             city: "string",
     *                             country: "string",
     *                             tags: [{
     *                                     key: "string",
     *                                     value: "string"
     *                                 }]
     *                         }]
     *                 },
     *                 pepStatus: [{
     *                         isPepHit: true
     *                     }],
     *                 tags: [{
     *                         key: "string",
     *                         value: "string"
     *                     }]
     *             }],
     *         transactionLimits: {
     *             maximumDailyTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             maximumWeeklyTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             maximumMonthlyTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             maximumQuarterlyTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             maximumTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             maximumYearlyTransactionLimit: {
     *                 amountValue: 1.1,
     *                 amountCurrency: Flagright.CurrencyCode.OneInch
     *             },
     *             paymentMethodLimits: {
     *                 ach: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 card: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 iban: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 upi: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 genericBankAccount: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 mpesa: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 swift: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 wallet: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 },
     *                 check: {
     *                     transactionCountLimit: {},
     *                     transactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     },
     *                     averageTransactionAmountLimit: {
     *                         day: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         week: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         month: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         },
     *                         year: {
     *                             amountValue: 1.1,
     *                             amountCurrency: Flagright.CurrencyCode.OneInch
     *                         }
     *                     }
     *                 }
     *             }
     *         },
     *         riskLevel: Flagright.RiskLevel.VeryHigh,
     *         allowedPaymentMethods: [Flagright.PaymentMethod.Ach],
     *         linkedEntities: {},
     *         acquisitionChannel: Flagright.AcquisitionChannel.Organic,
     *         mccDetails: {
     *             code: 1.1
     *         },
     *         tags: [{
     *                 key: "string",
     *                 value: "string"
     *             }],
     *         userId: "string",
     *         createdTimestamp: 1.1
     *     })
     */
    public async create(
        request: Flagright.Business,
        requestOptions?: BusinessUsers.RequestOptions
    ): Promise<Flagright.BusinessUsersCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                "business/users"
            ),
            method: "POST",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.3.5",
            },
            contentType: "application/json",
            body: await serializers.Business.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BusinessUsersCreateResponse.parseOrThrow(_response.body, {
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
     * ### GET Business User
     *
     * `/business/user` endpoint allows you to operate on the [Business User entity](https://docs.flagright.com/docs/flagright-api/0f8fac59d1995-entities-and-relationships#user).
     *
     * Calling `GET /business/user/{userId}` will return the entire User payload and rule execution results for the User with the corresponding `userId`
     * @throws {@link Flagright.UnauthorizedError}
     * @throws {@link Flagright.TooManyRequestsError}
     *
     * @example
     *     await flagright.businessUsers.get("string")
     */
    public async get(
        userId: string,
        requestOptions?: BusinessUsers.RequestOptions
    ): Promise<Flagright.BusinessResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.FlagrightEnvironment.Default,
                `business/users/${userId}`
            ),
            method: "GET",
            headers: {
                "x-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "flagright",
                "X-Fern-SDK-Version": "1.3.5",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.BusinessResponse.parseOrThrow(_response.body, {
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

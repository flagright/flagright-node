# Reference

## Transactions

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">verify</a>({ ...params }) -> Flagright.TransactionsVerifyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Transactions

`/transactions` endpoint allows you to operate on the [Transaction entity.](/guides/overview/entities#transaction)

In order to pass the payload of a transaction to Flagright and verify the transaction, you will need to call this endpoint with the transaction payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.

### Payload

Here are some of the most used payload fields explained (you can find the full payload [schema below](/api-reference/api-reference/transactions/verify#request) with 1 line descriptions):

- `type`: Type of transaction (Ex: `WITHDRAWAL`, `DEPOSIT`, `TRANSFER` etc).
- `transactionId` - Unique Identifier for the transaction.
- `timestamp` - UNIX timestamp in _milliseconds_ of when the transaction took place
- `transactionState` - The state of the transaction, set to `CREATED` by default. [More details here](/guides/overview/entities#transaction-lifecycle-through-transaction-events)
- `originUserId` - Unique identifier (if any) of the user who is sending the money. This user must be created within the Flagright system before using the [create a consumer user](/api-reference/api-reference/consumer-users/create) or [create a business user](/api-reference/api-reference/business-users/create) endpoint
- `destinationUserId` - Unique identifier (if any) of the user who is receiving the money. This user must be created within the Flagright system before using the [create a consumer user](/api-reference/api-reference/consumer-users/create) or [create a business user](/api-reference/api-reference/business-users/create) endpoint
- `originAmountDetails` - Details of the amount being sent from the origin
- `destinationAmountDetails` - Details of the amount being received at the destination
- `originPaymentDetails` - Payment details (if any) used at the origin (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
- `destinationPaymentDetails` - Payment details (if any) used at the destination (ex: `CARD`, `IBAN`, `WALLET` etc). You can click on the dropdown next to the field in the schema below to view all supported payment types.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.verify({
    validateOriginUserId: "true",
    validateDestinationUserId: "true",
    body: {
        type: "DEPOSIT",
        transactionId: "7b80a539eea6e78acbd6d458e5971482",
        timestamp: 1641654664000,
        originUserId: "8650a2611d0771cba03310f74bf6",
        destinationUserId: "9350a2611e0771cba03310f74bf6",
        originAmountDetails: {
            transactionAmount: 2000,
            transactionCurrency: "EUR",
            country: "DE"
        },
        destinationAmountDetails: {
            transactionAmount: 68351.34,
            transactionCurrency: "INR",
            country: "IN"
        },
        originPaymentDetails: {
            method: "CARD",
            cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
            cardIssuedCountry: "TR",
            transactionReferenceField: "Deposit",
            3DsDone: true
        },
        destinationPaymentDetails: {
            method: "CARD",
            cardFingerprint: "20ac00fed8ef913aefb17cfae1097cce",
            cardIssuedCountry: "TR",
            transactionReferenceField: "Deposit",
            3DsDone: true
        },
        promotionCodeUsed: true,
        reference: "loan repayment",
        originDeviceData: {
            batteryLevel: 95,
            deviceLatitude: 13.0033,
            deviceLongitude: 76.1004,
            ipAddress: "10.23.191.2",
            deviceIdentifier: "3c49f915d04485e34caba",
            vpnUsed: false,
            operatingSystem: "Android 11.2",
            deviceMaker: "ASUS",
            deviceModel: "Zenphone M2 Pro Max",
            deviceYear: "2018",
            appVersion: "1.1.0"
        },
        destinationDeviceData: {
            batteryLevel: 95,
            deviceLatitude: 13.0033,
            deviceLongitude: 76.1004,
            ipAddress: "10.23.191.2",
            deviceIdentifier: "3c49f915d04485e34caba",
            vpnUsed: false,
            operatingSystem: "Android 11.2",
            deviceMaker: "ASUS",
            deviceModel: "Zenphone M2 Pro Max",
            deviceYear: "2018",
            appVersion: "1.1.0"
        },
        tags: [{
                key: "customKey",
                value: "customValue"
            }]
    }
});

```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.TransactionsVerifyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">get</a>(transactionId) -> Flagright.TransactionWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET Transactions

`/transactions` endpoint allows you to operate on the [Transaction entity](/guides/overview/entities#transaction).

Calling `GET /transactions/{transactionId}` will return the entire transaction payload and rule execution results for the transaction with the corresponding `transactionId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.get("transactionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transactionId:** `string` — Unique Transaction Identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Batch

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">verifyTransaction</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.verifyTransaction({
    validateOriginUserId: "true",
    validateDestinationUserId: "true",
    data: [
        {
            type: "type",
            transactionId: "transactionId",
            timestamp: 1.1,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.TransactionBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getTransactions</a>(batchId, { ...params }) -> Flagright.BatchTransactionMonitoringResults</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getTransactions("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">createTransactionEvents</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.createTransactionEvents({
    data: [
        {
            transactionState: "CREATED",
            timestamp: 1.1,
            transactionId: "transactionId",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.TransactionEventBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getTransactionEvents</a>(batchId, { ...params }) -> Flagright.BatchTransactionEventMonitoringResults</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getTransactionEvents("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetTransactionEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">createConsumerUsers</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.createConsumerUsers({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    data: [
        {
            userId: "userId",
            createdTimestamp: 1.1,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.UserBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getConsumerUsers</a>(batchId, { ...params }) -> Flagright.BatchConsumerUsersWithRulesResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getConsumerUsers("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetConsumerUsersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">createBusinessUsers</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.createBusinessUsers({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    data: [
        {
            userId: "userId",
            createdTimestamp: 1.1,
            legalEntity: {
                companyGeneralDetails: {
                    legalName: "Ozkan Hazelnut Export JSC",
                    businessIndustry: ["Farming"],
                    mainProductsServicesSold: ["Hazelnut"],
                },
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.BusinessBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getBusinessUsers</a>(batchId, { ...params }) -> Flagright.BatchBusinessUsersWithRulesResults</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getBusinessUsers("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetBusinessUsersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">createConsumerUserEvents</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.createConsumerUserEvents({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    data: [
        {
            timestamp: 1.1,
            userId: "userId",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.ConsumerUserEventBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getConsumerUserEvents</a>(batchId, { ...params }) -> Flagright.BatchConsumerUserEventsRulesResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getConsumerUserEvents("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetConsumerUserEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">createBusinessUserEvents</a>({ ...params }) -> Flagright.BatchResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.createBusinessUserEvents({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    data: [
        {
            timestamp: 1.1,
            userId: "userId",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.BusinessUserEventBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batch.<a href="/src/api/resources/batch/client/Client.ts">getBusinessUserEvents</a>(batchId, { ...params }) -> Flagright.BatchBusinessUserEventsWithRulesResult</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batch.getBusinessUserEvents("batchId", {
    pageSize: 1.1,
    page: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string` — Unique Batch Identifier

</dd>
</dl>

<dl>
<dd>

**request:** `Flagright.BatchGetBusinessUserEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batch.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TransactionEvents

<details><summary><code>client.transactionEvents.<a href="/src/api/resources/transactionEvents/client/Client.ts">create</a>({ ...params }) -> Flagright.TransactionEventMonitoringResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Transaction Events

`/events/transaction` endpoint allows you to operate on the [Transaction Events entity.](/guides/overview/entities#transaction-event)

Transaction events are created after the initial `POST /transactions` call (which creates a transaction) and are used to:

- Update the STATE of the transaction, using the `transactionState` field and manage the [Transaction Lifecycle](/guides/overview/entities#transaction-lifecycle-through-transaction-events)
- Update the transaction details, using the `updatedTransactionAttributes` field.

> If you have neither of the above two use cases, you do not need to use transaction events.

### Payload

Each transaction event needs three mandatory fields:

- `transactionState` - STATE of the transaction -> value is set to `CREATED` after `POST /transactions` call
- `timestamp`- the timestamp of when the event was created or occured in your system
- `transactionId` - The ID of the transaction for which this event is generated.

In order to make individual events retrievable, you also need to pass in a unique `eventId` to the request body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactionEvents.create({
    transactionState: "SUCCESSFUL",
    timestamp: 1752526580000,
    transactionId: "443dea26147a406b957d9ee3a1247b11",
    eventId: "aaeeb166147a406b957dd9147a406b957",
    eventDescription: "Transaction created",
    metaData: {
        batteryLevel: 76.3,
        deviceLatitude: 13.009711,
        deviceLongitude: 76.102898,
        ipAddress: "79.144.2.20",
        vpnUsed: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.TransactionEvent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactionEvents.<a href="/src/api/resources/transactionEvents/client/Client.ts">get</a>(eventId) -> Flagright.TransactionEventWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET Transaction Events

`/events/transaction` endpoint allows you to operate on the [Transaction Events entity.](/guides/overview/entities#transaction-event).

You can retrieve any transaction event you created using the [POST Transaction Events](/api-reference/api-reference/transaction-events/create) call.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactionEvents.get("eventId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `string` — Unique Transaction Identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ConsumerUsers

<details><summary><code>client.consumerUsers.<a href="/src/api/resources/consumerUsers/client/Client.ts">create</a>({ ...params }) -> Flagright.ConsumerUsersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Consumer User

`/consumer/user` endpoint allows you to operate on the Consumer user entity.

In order to pass the payload of a User to Flagright and verify the User, you will need to call this endpoint with the User payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.

### Payload

Each consumer user needs two mandatory fields:

- `userId` - Unique identifier for the user
- `createdTimestamp` - UNIX timestamp in _milliseconds_ for when the User is created in your system
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consumerUsers.create({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    validateUserId: "true",
    body: {
        userId: "96647cfd9e8fe66ee0f3362e011e34e8",
        createdTimestamp: 1641654664000,
        userDetails: {
            name: {
                firstName: "Baran",
                middleName: "Realblood",
                lastName: "Ozkan",
            },
            dateOfBirth: "1991-01-01",
            countryOfResidence: "US",
            countryOfNationality: "DE",
        },
        legalDocuments: [
            {
                documentType: "passport",
                documentNumber: "Z9431P",
                documentIssuedDate: 1639939034000,
                documentExpirationDate: 1839939034000,
                documentIssuedCountry: "DE",
                tags: [
                    {
                        key: "customerType",
                        value: "wallet",
                    },
                ],
            },
        ],
        contactDetails: {
            emailIds: ["baran@flagright.com"],
            contactNumbers: ["+37112345432"],
            websites: ["flagright.com"],
            addresses: [
                {
                    addressLines: ["Klara-Franke Str 20"],
                    postcode: "10557",
                    city: "Berlin",
                    state: "Berlin",
                    country: "Germany",
                    tags: [
                        {
                            key: "customKey",
                            value: "customValue",
                        },
                    ],
                },
            ],
        },
        tags: [
            {
                key: "customKey",
                value: "customValue",
            },
        ],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.ConsumerUsersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsumerUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.consumerUsers.<a href="/src/api/resources/consumerUsers/client/Client.ts">get</a>(userId) -> Flagright.UserWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET Consumer User

`/consumer/user` endpoint allows you to operate on the Consumer User entity.

Calling `GET /consumer/user/{userId}` will return the entire user payload and rule execution results for the user with the corresponding `userId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consumerUsers.get("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` —

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsumerUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BusinessUsers

<details><summary><code>client.businessUsers.<a href="/src/api/resources/businessUsers/client/Client.ts">create</a>({ ...params }) -> Flagright.BusinessUsersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Business User

`/business/user` endpoint allows you to operate on the Business user entity.

In order to pass the payload of a User to Flagright and verify the User, you will need to call this endpoint with the User payload. Not all fields are mandatory, you will only need to pass in the fields that you have and are relevant for your compliance setup.

### Payload

Each business user needs three mandatory fields:

- `userId` - Unique identifier for the user
- `legalEntity` - Details of the business legal entity (CompanyGeneralDetails, FinancialDetails etc) - only `legalName`in `CompanyGeneralDetails` is mandatory
- `createdTimestamp` - UNIX timestamp in _milliseconds_ for when the User is created in your system
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessUsers.create({
    lockCraRiskLevel: "true",
    lockKycRiskLevel: "true",
    validateUserId: "true",
    body: {
        userId: "userId",
        createdTimestamp: 1.1,
        legalEntity: {
            companyGeneralDetails: {
                legalName: "Ozkan Hazelnut Export JSC",
                businessIndustry: ["Farming"],
                mainProductsServicesSold: ["Hazelnut"],
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.BusinessUsersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.businessUsers.<a href="/src/api/resources/businessUsers/client/Client.ts">get</a>(userId) -> Flagright.BusinessWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET Business User

`/business/user` endpoint allows you to operate on the Business User entity.

Calling `GET /business/user/{userId}` will return the entire User payload and rule execution results for the User with the corresponding `userId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessUsers.get("userId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` —

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ConsumerUserEvents

<details><summary><code>client.consumerUserEvents.<a href="/src/api/resources/consumerUserEvents/client/Client.ts">create</a>({ ...params }) -> Flagright.UserWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Consumer User Events

`/events/consumer/user` endpoint allows you to operate on the Consumer User Events entity.

User events are created after the initial `POST /consumer/users` call (which creates a user) and are used to:

- Update the STATE and KYC Status of the user, using the `userStateDetails` or `kycStatusDetails` field
- Update the user details, using the `updatedConsumerUserAttributes` field.

> If you have neither of the above two use cases, you do not need to use user events.

### Payload

Each user event needs three mandatory fields:

- `timestamp`- the timestamp of when the event was created or occured in your system
- `userId` - The ID of the transaction for which this event is generated.

In order to make individual events retrievable, you also need to pass in a unique `eventId` to the request body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consumerUserEvents.create({
    allowUserTypeConversion: "true",
    lockKycRiskLevel: "true",
    lockCraRiskLevel: "true",
    body: {
        timestamp: 1.1,
        userId: "userId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.ConsumerUserEventsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsumerUserEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.consumerUserEvents.<a href="/src/api/resources/consumerUserEvents/client/Client.ts">get</a>(eventId) -> Flagright.ConsumerUserEventWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET a Consumer User Event

You can retrieve any consumer user event you created using the [POST Consumer User Events](/api-reference/api-reference/consumer-user-events/create) call.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consumerUserEvents.get("eventId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `string` — Unique Consumer User Event Identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsumerUserEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BusinessUserEvents

<details><summary><code>client.businessUserEvents.<a href="/src/api/resources/businessUserEvents/client/Client.ts">create</a>({ ...params }) -> Flagright.BusinessWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

## POST Business User Events

`/events/business/user` endpoint allows you to operate on the Business User Events entity.

User events are created after the initial `POST /business/users` call (which creates a user) and are used to:

- Update the STATE and KYC Status of the user, using the `userStateDetails` or `kycStatusDetails` field
- Update the user details, using the `updatedBusinessUserAttributes` field.

> If you have neither of the above two use cases, you do not need to use user events.

### Payload

Each user event needs three mandatory fields:

- `timestamp`- the timestamp of when the event was created or occured in your system
- `userId` - The ID of the transaction for which this event is generated.

In order to make individual events retrievable, you also need to pass in a unique `eventId` to the request body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessUserEvents.create({
    allowUserTypeConversion: "true",
    lockKycRiskLevel: "true",
    lockCraRiskLevel: "true",
    body: {
        timestamp: 1.1,
        userId: "userId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Flagright.BusinessUserEventsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessUserEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.businessUserEvents.<a href="/src/api/resources/businessUserEvents/client/Client.ts">get</a>(eventId) -> Flagright.BusinessUserEventWithRulesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

### GET a Business User Event

You can retrieve any business user event you created using the [POST Business User Events](/api-reference/api-reference/business-user-events/create) call.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.businessUserEvents.get("eventId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**eventId:** `string` — Unique Business User Event Identifier

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BusinessUserEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

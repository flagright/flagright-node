# Flagright Node Library

[![npm shield](https://img.shields.io/npm/v/flagright)](https://www.npmjs.com/package/flagright)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Flagright Node.js library provides access to the Flagright API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.flagright.com>.

## Usage

```typescript
import { FlagrightClient } from 'flagright';

const client = new FlagrightClient({ environment: 'https://sandbox.api.flagright.com', apiKey: 'YOUR_API_KEY', })
const response = await client.transactions.verify({
  body: {
    transactionId: 'my-transaction-id',
    type: 'DEPOSIT',
    timestamp: 1692624734000,
  },
})

console.log(`Received response from Flagright: ${JSON.stringify(response)}`);
```

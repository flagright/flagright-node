# Flagright Node Library

[![npm shield](https://img.shields.io/npm/v/flagright)](https://www.npmjs.com/package/flagright)

The Flagright Node.js library provides access to the Flagright API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.flagright.com>.

## Usage

```typescript
import { FlagrightClient } from 'flagright';

const client = new FlagrightClient({ apiKey: 'YOUR_API_KEY' })
const response = await client.transactions.verify({
  body: {
    transactionId: 'my-transaction-id',
    type_: 'DEPOSIT',
    originUserId: 'origin-user-id',
    timestamp: 1692624734000,
  },
})

console.log('Received response from Flagright:', response);
```
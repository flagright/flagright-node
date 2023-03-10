# Flagright Node Library

[![npm shield](https://img.shields.io/npm/v/flagright)](https://www.npmjs.com/package/flagright)

The Flagright Node.js library provides access to the Flagright API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.flagright.com>.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/flagright-typescript-ebcjpf?file=app.ts&view=editor)

```typescript
import { FlagrightClient } from 'flagright';

const client = new FlagrightClient({
  apiKey: 'MY_API_KEY',
});

const response = await client.verifyTransaction({
  body: {
    transactionId: 'my-transaction-id',
    originUserId: 'origin-user-id',
    type: Flagright.TransactionType.Deposit,
    timestamp: 1676392009,
  },
});

console.log('Received response from Flagright!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!

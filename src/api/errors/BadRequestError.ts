/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors";

export class BadRequestError extends errors.FlagrightError {
    constructor(body?: unknown) {
        super({
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

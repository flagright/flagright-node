/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const FlagrightEnvironment = {
    SandboxApiServerEu1: "https://sandbox.api.flagright.com",
    SandboxApiServerAsia1: "https://sandbox-asia-1.api.flagright.com",
} as const;

export type FlagrightEnvironment =
    | typeof FlagrightEnvironment.SandboxApiServerEu1
    | typeof FlagrightEnvironment.SandboxApiServerAsia1;

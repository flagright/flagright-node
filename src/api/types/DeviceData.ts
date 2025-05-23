/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Flagright from "../index";

/**
 * Model for device data
 */
export interface DeviceData {
    /** Battery level of the device used for a transaction or event at a given timestamp */
    batteryLevel?: number;
    /** Device latitude at a give timestamp for an event or transaction */
    deviceLatitude?: number;
    /** Device longitude at a give timestamp for an event or transaction */
    deviceLongitude?: number;
    /** IP address of the device at a given timestamp for an event or transaction */
    ipAddress?: string;
    ipCountry?: Flagright.CountryCode;
    /** Device identifier number */
    deviceIdentifier?: string;
    /** Whether VPN was used at a given timestamp for an event or transaction */
    vpnUsed?: boolean;
    /** Operating system of the device at a given timestamp for an event or transaction */
    operatingSystem?: string;
    /** The maker of the device at a given timestamp for an event or transaction */
    deviceMaker?: string;
    /** The model of the device at a given timestamp for an event or transaction */
    deviceModel?: string;
    /** The year the device was manufactured at a given timestamp for an event or transaction */
    deviceYear?: string;
    /** The version of the app your user is using on their device at a given timestamp for an event or transaction */
    appVersion?: string;
}

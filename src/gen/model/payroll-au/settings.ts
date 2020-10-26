/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from '././account';
import { SettingsTrackingCategories } from '././settingsTrackingCategories';

export class Settings {
    /**
    * Payroll Account details for SuperExpense, SuperLiabilty, WagesExpense, PAYGLiability & WagesPayable.
    */
    'accounts'?: Array<Account>;
    'trackingCategories'?: SettingsTrackingCategories;
    /**
    * Number of days in the Payroll year
    */
    'daysInPayrollYear'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accounts",
            "baseName": "Accounts",
            "type": "Array<Account>"
        },
        {
            "name": "trackingCategories",
            "baseName": "TrackingCategories",
            "type": "SettingsTrackingCategories"
        },
        {
            "name": "daysInPayrollYear",
            "baseName": "DaysInPayrollYear",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Settings.attributeTypeMap;
    }
}


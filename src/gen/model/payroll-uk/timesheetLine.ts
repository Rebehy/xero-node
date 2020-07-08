/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.6
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TimesheetLine {
    /**
    * The Xero identifier for a Timesheet Line
    */
    'timesheetLineID'?: string;
    /**
    * The Date that this Timesheet Line is for (YYYY-MM-DD)
    */
    'date': string;
    /**
    * The Xero identifier for the Earnings Rate that the Timesheet is for
    */
    'earningsRateID': string;
    /**
    * The Xero identifier for the Tracking Item that the Timesheet is for
    */
    'trackingItemID'?: string;
    /**
    * The Number of Units of the Timesheet Line
    */
    'numberOfUnits': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "timesheetLineID",
            "baseName": "timesheetLineID",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "earningsRateID",
            "baseName": "earningsRateID",
            "type": "string"
        },
        {
            "name": "trackingItemID",
            "baseName": "trackingItemID",
            "type": "string"
        },
        {
            "name": "numberOfUnits",
            "baseName": "numberOfUnits",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TimesheetLine.attributeTypeMap;
    }
}


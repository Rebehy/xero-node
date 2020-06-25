/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TrackingCategory {
    /**
    * The Xero identifier for Employee groups tracking category.
    */
    'employeeGroupsTrackingCategoryID'?: string;
    /**
    * The Xero identifier for Timesheet tracking category.
    */
    'timesheetTrackingCategoryID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeGroupsTrackingCategoryID",
            "baseName": "employeeGroupsTrackingCategoryID",
            "type": "string"
        },
        {
            "name": "timesheetTrackingCategoryID",
            "baseName": "timesheetTrackingCategoryID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TrackingCategory.attributeTypeMap;
    }
}


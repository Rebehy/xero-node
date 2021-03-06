/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LeavePeriod } from '././leavePeriod';

export class EmployeeLeave {
    /**
    * The Xero identifier for LeaveType
    */
    'leaveID'?: string;
    /**
    * The Xero identifier for LeaveType
    */
    'leaveTypeID': string;
    /**
    * The description of the leave  (max length = 50)
    */
    'description': string;
    /**
    * Start date of the leave (YYYY-MM-DD)
    */
    'startDate': string;
    /**
    * End date of the leave (YYYY-MM-DD)
    */
    'endDate': string;
    /**
    * The leave period information. The StartDate, EndDate and NumberOfUnits needs to be specified when you do not want to calculate NumberOfUnits automatically. Using incorrect period StartDate and EndDate will result in automatic computation of the NumberOfUnits.
    */
    'periods'?: Array<LeavePeriod>;
    /**
    * UTC timestamp of last update to the leave type note
    */
    'updatedDateUTC'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaveID",
            "baseName": "leaveID",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "leaveTypeID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "periods",
            "baseName": "periods",
            "type": "Array<LeavePeriod>"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "updatedDateUTC",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeave.attributeTypeMap;
    }
}


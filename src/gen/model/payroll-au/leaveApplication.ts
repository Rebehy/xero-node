/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LeavePeriod } from '././leavePeriod';
import { ValidationError } from '././validationError';

export class LeaveApplication {
    /**
    * The Xero identifier for Payroll Employee
    */
    'leaveApplicationID'?: string;
    /**
    * The Xero identifier for Payroll Employee
    */
    'employeeID'?: string;
    /**
    * The Xero identifier for Leave Type
    */
    'leaveTypeID'?: string;
    /**
    * The title of the leave
    */
    'title'?: string;
    /**
    * Start date of the leave (YYYY-MM-DD)
    */
    'startDate'?: string;
    /**
    * End date of the leave (YYYY-MM-DD)
    */
    'endDate'?: string;
    /**
    * The Description of the Leave
    */
    'description'?: string;
    'leavePeriods'?: Array<LeavePeriod>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "leaveApplicationID",
            "baseName": "LeaveApplicationID",
            "type": "string"
        },
        {
            "name": "employeeID",
            "baseName": "EmployeeID",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "LeaveTypeID",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "StartDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "EndDate",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "leavePeriods",
            "baseName": "LeavePeriods",
            "type": "Array<LeavePeriod>"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "string"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return LeaveApplication.attributeTypeMap;
    }
}


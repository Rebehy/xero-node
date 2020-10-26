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


export class EmployeeLeaveBalance {
    /**
    * Name of the leave type.
    */
    'name'?: string;
    /**
    * The Xero identifier for leave type
    */
    'leaveTypeID'?: string;
    /**
    * The employees current balance for the corresponding leave type.
    */
    'balance'?: number;
    /**
    * The type of the units of the leave.
    */
    'typeOfUnits'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "leaveTypeID",
            "baseName": "leaveTypeID",
            "type": "string"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "typeOfUnits",
            "baseName": "typeOfUnits",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeaveBalance.attributeTypeMap;
    }
}


/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.6
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReimbursementLine } from '././reimbursementLine';

/**
* The reimbursement type lines
*/
export class ReimbursementLines {
    'reimbursementLines'?: Array<ReimbursementLine>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementLines",
            "baseName": "ReimbursementLines",
            "type": "Array<ReimbursementLine>"
        }    ];

    static getAttributeTypeMap() {
        return ReimbursementLines.attributeTypeMap;
    }
}


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

import { EarningsTemplate } from '././earningsTemplate';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeePayTemplates {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'earningTemplates'?: Array<EarningsTemplate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "earningTemplates",
            "baseName": "earningTemplates",
            "type": "Array<EarningsTemplate>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeePayTemplates.attributeTypeMap;
    }
}


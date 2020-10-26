/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.3.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Employment } from '././employment';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmploymentObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'employment'?: Employment;

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
            "name": "employment",
            "baseName": "employment",
            "type": "Employment"
        }    ];

    static getAttributeTypeMap() {
        return EmploymentObject.attributeTypeMap;
    }
}


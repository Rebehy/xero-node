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

import { EarningsOrder } from '././earningsOrder';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EarningsOrders {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'statutoryDeductions'?: Array<EarningsOrder>;

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
            "name": "statutoryDeductions",
            "baseName": "statutoryDeductions",
            "type": "Array<EarningsOrder>"
        }    ];

    static getAttributeTypeMap() {
        return EarningsOrders.attributeTypeMap;
    }
}


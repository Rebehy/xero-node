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

import { Benefit } from '././benefit';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class BenefitObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'benefit'?: Benefit;

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
            "name": "benefit",
            "baseName": "benefit",
            "type": "Benefit"
        }    ];

    static getAttributeTypeMap() {
        return BenefitObject.attributeTypeMap;
    }
}


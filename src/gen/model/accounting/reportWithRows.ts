/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.6
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportWithRow } from '././reportWithRow';

export class ReportWithRows {
    'reports'?: Array<ReportWithRow>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reports",
            "baseName": "Reports",
            "type": "Array<ReportWithRow>"
        }    ];

    static getAttributeTypeMap() {
        return ReportWithRows.attributeTypeMap;
    }
}


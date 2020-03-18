/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.5
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportCell } from '././reportCell';
import { RowType } from '././rowType';

export class ReportRow {
    'rowType'?: RowType;
    'title'?: string;
    'cells'?: Array<ReportCell>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rowType",
            "baseName": "RowType",
            "type": "RowType"
        },
        {
            "name": "title",
            "baseName": "Title",
            "type": "string"
        },
        {
            "name": "cells",
            "baseName": "Cells",
            "type": "Array<ReportCell>"
        }    ];

    static getAttributeTypeMap() {
        return ReportRow.attributeTypeMap;
    }
}


/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.0.8
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pagination } from './pagination';
import { Task } from './task';

export class Tasks {
    'pagination'?: Pagination;
    'items'?: Array<Task>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Task>"
        }    ];

    static getAttributeTypeMap() {
        return Tasks.attributeTypeMap;
    }
}


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

import { InvalidField } from '././invalidField';

/**
* The object returned for a bad request
*/
export class Problem {
    /**
    * The type of error format
    */
    'type'?: string;
    /**
    * The type of the error
    */
    'title'?: string;
    /**
    * The error status code
    */
    'status'?: string;
    /**
    * A description of the error
    */
    'detail'?: string;
    'instance'?: string;
    'invalidFields'?: Array<InvalidField>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<InvalidField>"
        }    ];

    static getAttributeTypeMap() {
        return Problem.attributeTypeMap;
    }
}


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

import { OnlineInvoice } from '././onlineInvoice';

export class OnlineInvoices {
    'onlineInvoices'?: Array<OnlineInvoice>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "onlineInvoices",
            "baseName": "OnlineInvoices",
            "type": "Array<OnlineInvoice>"
        }    ];

    static getAttributeTypeMap() {
        return OnlineInvoices.attributeTypeMap;
    }
}


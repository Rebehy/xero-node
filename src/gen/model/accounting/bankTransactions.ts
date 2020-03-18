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

import { BankTransaction } from '././bankTransaction';

export class BankTransactions {
    'bankTransactions'?: Array<BankTransaction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankTransactions",
            "baseName": "BankTransactions",
            "type": "Array<BankTransaction>"
        }    ];

    static getAttributeTypeMap() {
        return BankTransactions.attributeTypeMap;
    }
}


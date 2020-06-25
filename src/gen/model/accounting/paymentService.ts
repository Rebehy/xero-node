/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidationError } from '././validationError';

export class PaymentService {
    /**
    * Xero identifier
    */
    'paymentServiceID'?: string;
    /**
    * Name of payment service
    */
    'paymentServiceName'?: string;
    /**
    * The custom payment URL
    */
    'paymentServiceUrl'?: string;
    /**
    * The text displayed on the Pay Now button in Xero Online Invoicing. If this is not set it will default to Pay by credit card
    */
    'payNowText'?: string;
    /**
    * This will always be CUSTOM for payment services created via the API.
    */
    'paymentServiceType'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymentServiceID",
            "baseName": "PaymentServiceID",
            "type": "string"
        },
        {
            "name": "paymentServiceName",
            "baseName": "PaymentServiceName",
            "type": "string"
        },
        {
            "name": "paymentServiceUrl",
            "baseName": "PaymentServiceUrl",
            "type": "string"
        },
        {
            "name": "payNowText",
            "baseName": "PayNowText",
            "type": "string"
        },
        {
            "name": "paymentServiceType",
            "baseName": "PaymentServiceType",
            "type": "string"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return PaymentService.attributeTypeMap;
    }
}


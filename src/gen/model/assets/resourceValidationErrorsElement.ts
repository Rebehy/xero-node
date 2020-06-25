/**
 * Xero Assets API
 * This is the Xero Assets API
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ResourceValidationErrorsElement {
    /**
    * The field name of the erroneous field
    */
    'resourceName'?: string;
    /**
    * Explaination of the resource validation error
    */
    'localisedMessage'?: string;
    /**
    * Internal type of the resource error message
    */
    'type'?: string;
    /**
    * Title of the resource validation error
    */
    'title'?: string;
    /**
    * Detail of the resource validation error
    */
    'detail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string"
        },
        {
            "name": "localisedMessage",
            "baseName": "localisedMessage",
            "type": "string"
        },
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
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResourceValidationErrorsElement.attributeTypeMap;
    }
}


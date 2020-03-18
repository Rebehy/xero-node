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

import { Attachment } from '././attachment';
import { Contact } from '././contact';
import { CurrencyCode } from '././currencyCode';
import { LineAmountTypes } from '././lineAmountTypes';
import { LineItem } from '././lineItem';
import { Schedule } from '././schedule';

export class RepeatingInvoice {
    /**
    * See Invoice Types
    */
    'type'?: RepeatingInvoice.TypeEnum;
    'contact'?: Contact;
    'schedule'?: Schedule;
    /**
    * See LineItems
    */
    'lineItems'?: Array<LineItem>;
    'lineAmountTypes'?: LineAmountTypes;
    /**
    * ACCREC only – additional reference number
    */
    'reference'?: string;
    /**
    * See BrandingThemes
    */
    'brandingThemeID'?: string;
    'currencyCode'?: CurrencyCode;
    /**
    * One of the following - DRAFT or AUTHORISED – See Invoice Status Codes
    */
    'status'?: RepeatingInvoice.StatusEnum;
    /**
    * Total of invoice excluding taxes
    */
    'subTotal'?: number;
    /**
    * Total tax on invoice
    */
    'totalTax'?: number;
    /**
    * Total of Invoice tax inclusive (i.e. SubTotal + TotalTax)
    */
    'total'?: number;
    /**
    * Xero generated unique identifier for repeating invoice template
    */
    'repeatingInvoiceID'?: string;
    /**
    * Xero generated unique identifier for repeating invoice template
    */
    'ID'?: string;
    /**
    * boolean to indicate if an invoice has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "RepeatingInvoice.TypeEnum"
        },
        {
            "name": "contact",
            "baseName": "Contact",
            "type": "Contact"
        },
        {
            "name": "schedule",
            "baseName": "Schedule",
            "type": "Schedule"
        },
        {
            "name": "lineItems",
            "baseName": "LineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "lineAmountTypes",
            "baseName": "LineAmountTypes",
            "type": "LineAmountTypes"
        },
        {
            "name": "reference",
            "baseName": "Reference",
            "type": "string"
        },
        {
            "name": "brandingThemeID",
            "baseName": "BrandingThemeID",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "CurrencyCode",
            "type": "CurrencyCode"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "RepeatingInvoice.StatusEnum"
        },
        {
            "name": "subTotal",
            "baseName": "SubTotal",
            "type": "number"
        },
        {
            "name": "totalTax",
            "baseName": "TotalTax",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "Total",
            "type": "number"
        },
        {
            "name": "repeatingInvoiceID",
            "baseName": "RepeatingInvoiceID",
            "type": "string"
        },
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        }    ];

    static getAttributeTypeMap() {
        return RepeatingInvoice.attributeTypeMap;
    }
}

export namespace RepeatingInvoice {
    export enum TypeEnum {
        ACCPAY = <any> 'ACCPAY',
        ACCREC = <any> 'ACCREC'
    }
    export enum StatusEnum {
        DRAFT = <any> 'DRAFT',
        AUTHORISED = <any> 'AUTHORISED',
        DELETED = <any> 'DELETED'
    }
}

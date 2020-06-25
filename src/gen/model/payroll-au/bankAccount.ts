/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.4
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class BankAccount {
    /**
    * The text that will appear on your employee\'s bank statement when they receive payment
    */
    'statementText'?: string;
    /**
    * The name of the account
    */
    'accountName'?: string;
    /**
    * The BSB number of the account
    */
    'bSB'?: string;
    /**
    * The account number
    */
    'accountNumber'?: string;
    /**
    * If this account is the Remaining bank account
    */
    'remainder'?: boolean;
    /**
    * Fixed amounts (for example, if an employee wants to have $100 of their salary transferred to one account, and the remaining amount to another)
    */
    'amount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statementText",
            "baseName": "StatementText",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "AccountName",
            "type": "string"
        },
        {
            "name": "bSB",
            "baseName": "BSB",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "AccountNumber",
            "type": "string"
        },
        {
            "name": "remainder",
            "baseName": "Remainder",
            "type": "boolean"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}


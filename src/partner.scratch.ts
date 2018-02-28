
import * as  prompt from 'prompt';
import * as opn from 'opn';
import { AccountingAPIClient } from './endpoints/AccountingAPIClient';

const data = require('./xero_partner.json');
const xero = new AccountingAPIClient(data);

(async function() {
	const unauthorisedRequestToken = await xero.oauth10a.getUnauthorisedRequestToken();
	const url = xero.oauth10a.buildAuthoriseUrl(unauthorisedRequestToken.oauth_token);

	opn(url);

	console.log(url);

	console.log('working');
	const pin = 'temp';
	// const pin = await readLine('PIN: ');
	// tslint:disable-next-line:no-debugger
	debugger; // You need to set pin to the pin that the Auth page gave you. Or if not running in debugger use the line above.

	await xero.oauth10a.getAccessToken(unauthorisedRequestToken, pin);

	const inv = await xero.contacts.get();
	console.log('Invoice', inv);
	console.log('State', xero.state);
})();

export async function readLine(stringPrompt: string): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		prompt.start();
		prompt.get([stringPrompt], function(err: Error, result: any) {
			resolve(result[stringPrompt]);
		});
	});
}

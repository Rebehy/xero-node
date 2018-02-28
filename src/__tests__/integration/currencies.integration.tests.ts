import { AccountingAPIClient } from '../../endpoints/AccountingAPIClient';
import * as path from 'path';
import { CurrenciesResponse } from '../../interfaces/AccountingAPI';

// TODO: Let them pass in the privateKey and privateKey path
const data = require('./xero.json');
const xero = new AccountingAPIClient({ ...data, ...{ PrivateKeyCert: path.resolve(__dirname, '..', '..', '..', 'privatekey.pem') } });

describe('/currencies integration tests', () => {
	describe('and creating and getting', () => {
		let result: CurrenciesResponse;

		beforeAll(async () => {
			try {
				await xero.currencies.create({Code: 'PHP'});
			}
			// You can't delete currencies
			catch (e) {
				// Do Nothing
			}

			result = await xero.currencies.get();
		});

		it('the response is defined', () => {
			expect(result).not.toBeNull();
		});

		it('currency created can be fetched', async () => {
			expect(result.Currencies.find((cur) => cur.Code == 'PHP')).toMatchObject({
				Code: 'PHP',
				Description: 'Philippine Peso'
			});
		});
	});

});

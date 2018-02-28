import { InMemoryOAuthLib } from './InMemoryOAuthLib';
import { AccountingAPIClient } from '../../endpoints/AccountingAPIClient';
import { validTestCertPath } from '../test-helpers';

describe('client', () => {
	describe('and private key errors', () => {
		it('throws when using invalid private key', () => {
			// TODO: Needed or nah?
		});
	});

	describe('and 404 errors', () => {
		const inMemoryOAuth = new InMemoryOAuthLib();
		let xeroClient: AccountingAPIClient = null;

		beforeAll(async () => {
			inMemoryOAuth.callbackResultsForNextCall({
				statusCode: 404,
				data: 'The resource you\'re looking for cannot be found'
			}, `The resource you're looking for cannot be found`, { statusCode: 404 });

			// TODO: Move to test utils: GetTestClient() or something
			xeroClient = new AccountingAPIClient({
				AppType: 'private',
				ConsumerKey: 'RDGDV41TRLQZDFSDX96TKQ2KRJIW4C',
				ConsumerSecret: 'DJ3CMGDB0DIIA9DNEEJMRLZG0BWE7Y',
				PrivateKeyCert: validTestCertPath
			}, null, inMemoryOAuth);

		});

		it('error is expected', async () => {
			expect.assertions(1);
			try {
				await xeroClient.invoices.get();
			} catch (error){
				expect(error).toMatchObject({
					statusCode: 404,
					body: 'The resource you\'re looking for cannot be found'
				});
			}
		});
	});

	describe('and 400 validation errors', () => {
	});
});

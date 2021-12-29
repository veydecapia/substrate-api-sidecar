import { karuraAccountBalanceEndpoints } from './balance-info';
import { karuraAccountValidateEndpoints } from './validate';

export const karuraAccountsEndpoints = [
	...karuraAccountBalanceEndpoints,
	...karuraAccountValidateEndpoints,
];

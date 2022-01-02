import { karuraAccountsEndpoints } from './accounts';
import { karuraBlockEndpoints } from './blocks';
import { karuraRuntimeEndpoints } from './runtime';

export const karuraEndpoints = {
	blocks: karuraBlockEndpoints,
	accounts: karuraAccountsEndpoints,
	paras: [],
	runtime: karuraRuntimeEndpoints,
};

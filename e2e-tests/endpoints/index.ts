import { IChains } from '../types';
import { kusamaEndpoints } from './kusama';
import { polkadotEndpoints } from './polkadot';
import { statemineEndpoints } from './statemine';
import { westendEndpoints } from './westend';
import { karuraEndpoints } from './karura';

export const endpoints: IChains = {
	kusama: kusamaEndpoints,
	polkadot: polkadotEndpoints,
	westend: westendEndpoints,
	statemine: statemineEndpoints,
	karura: karuraEndpoints,
};

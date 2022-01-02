import { karuraRuntimeSpecEndpoints } from './spec';
import { karuraRuntimeCodeEndpoints } from './code';
import { karuraRuntimeMetadataEndpoints } from './metadata';

export const karuraRuntimeEndpoints = [
	...karuraRuntimeSpecEndpoints,
	...karuraRuntimeCodeEndpoints,
	...karuraRuntimeMetadataEndpoints,
];

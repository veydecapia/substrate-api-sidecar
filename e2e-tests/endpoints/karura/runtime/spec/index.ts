import runtimeSpec1000 from './1000.json';
import runtimeSpec100000 from './100000.json';
import runtimeSpec1000000 from './1000000.json';

export const karuraRuntimeSpecEndpoints = [
	['/runtime/spec?at=1000', JSON.stringify(runtimeSpec1000)], //v1000
	['/runtime/spec?at=100000', JSON.stringify(runtimeSpec100000)], //v1002
	['/runtime/spec?at=1000000', JSON.stringify(runtimeSpec1000000)], //v1019
];

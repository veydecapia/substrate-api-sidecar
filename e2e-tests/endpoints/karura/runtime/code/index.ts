import runtimeCode1000 from './1000.json';
import runtimeCode100000 from './100000.json';
import runtimeCode1000000 from './1000000.json';

export const karuraRuntimeCodeEndpoints = [
	['/runtime/code?at=1000', JSON.stringify(runtimeCode1000)], // v1000
	['/runtime/code?at=100000', JSON.stringify(runtimeCode100000)], // v1002
	['/runtime/code?at=1000000', JSON.stringify(runtimeCode1000000)], // v1019
];

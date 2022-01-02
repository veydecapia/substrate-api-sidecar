import runtimeMetadata1000 from './1000.json';
import runtimeMetadata100000 from './100000.json';
import runtimeMetadata1000000 from './1000000.json';

export const karuraRuntimeMetadataEndpoints = [
	['/runtime/metadata?at=1000', JSON.stringify(runtimeMetadata1000)], // v1000
	['/runtime/metadata?at=100000', JSON.stringify(runtimeMetadata100000)], // v1002
	['/runtime/metadata?at=1000000', JSON.stringify(runtimeMetadata1000000)], // v1019
];

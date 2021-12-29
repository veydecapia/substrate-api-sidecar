import validKarura from './validKarura.json';

const validKaruraStringify = JSON.stringify(validKarura);

export const karuraAccountValidateEndpoints = [
	[
		'/accounts/r9uUeMykzE7wfbWv7f72p4KRyY8vAukxzGufFo7do91YeRj/validate',
		validKaruraStringify,
	],
];

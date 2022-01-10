import sanityClient from '@sanity/client';

type Client = {
	projectId: string;
	dataset: string;
	apiVersion: string;
	useCdn: boolean;
};

const options: Client = {
	projectId: 'd690w3ub',
	dataset: 'production',
	apiVersion: 'v2021-03-25',
	useCdn: false
};

const client = sanityClient(options);

export { client };

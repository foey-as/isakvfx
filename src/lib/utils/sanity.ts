import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'bnenft5e',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2023-06-29'
};

export const client = createClient(config);

export async function getProjectSlugs() {
	const slugs = await client.fetch('*[_type == "project"].slug.current');
	console.log(slugs);
	return slugs;
}

export async function getProjects() {
	const projects = await client.fetch('*[_type == "project"]');
	console.log(projects);
	return projects;
}

export async function getProject(slug: string) {
	const project = await client.fetch('*[_type == "project" && slug.current == $slug][0]', { slug });
	return project;
}

export async function getMetadata() {
	const metadata = await client.fetch('*[_type == "metadata"][0]');
	console.log(metadata);
	return metadata;
}

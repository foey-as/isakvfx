import { getMetadata, getProjects } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
	const projects = await getProjects();
	const metadata = await getMetadata();

	if (projects && metadata) return { projects, metadata };

	throw error(404, 'Siden finnes ikke');
}) satisfies PageLoad;

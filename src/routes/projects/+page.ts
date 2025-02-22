import { getProjects } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
	const projects = await getProjects();

	if (projects) return { projects };

	throw error(404, 'Page not found');
}) satisfies PageLoad;

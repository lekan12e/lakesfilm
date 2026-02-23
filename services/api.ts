/** @format */

export const TMBD_CONFIG = {
	baseUrl: "https://api.themoviedb.org/3",
	apiKey: process.env.EXPO_PUBLIC_API_KEY,
	headers: {
		accepts: "application/json",
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
	},
};

export const fetchMovies = async (query: string) => {
	const endpoint =
		query ?
			`${TMBD_CONFIG.baseUrl}/search/movie?query=${query}`
		:	`${TMBD_CONFIG.baseUrl}/movie/popular?sort_by=popularity.desc`;

	const response = await fetch(endpoint, {
		method: "GET",
		headers: TMBD_CONFIG.headers,
	});
	if (!response.ok) {
		console.error(`Failed to fetch movies: ${response.statusText}`);
		throw new Error(`Failed to fetch movies: ${response.statusText}`);
	}
	return await response.json();
};

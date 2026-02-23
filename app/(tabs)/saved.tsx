/** @format */

import MoviesCard from "@/components/MoviesCard";
import { images } from "@/constants/images";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dummySavedMovies = [
	{
		adult: false,
		backdrop_path: "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
		belongs_to_collection: null,
		budget: 160000000,
		genres: [
			{ id: 28, name: "Action" },
			{ id: 878, name: "Science Fiction" },
			{ id: 12, name: "Adventure" },
		],
		homepage: "https://www.warnerbros.com/movies/inception",
		id: 27205,
		imdb_id: "tt1375666",
		origin_country: ["US", "GB"],
		original_language: "en",
		original_title: "Inception",
		overview:
			"Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
		popularity: 28.9848,
		poster_path: "/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
		production_companies: [
			{
				id: 923,
				logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
				name: "Legendary Pictures",
				origin_country: "US",
			},
			{
				id: 9996,
				logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
				name: "Syncopy",
				origin_country: "GB",
			},
			{
				id: 174,
				logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
				name: "Warner Bros. Pictures",
				origin_country: "US",
			},
		],
		production_countries: [
			{ iso_3166_1: "GB", name: "United Kingdom" },
			{ iso_3166_1: "US", name: "United States of America" },
		],
		release_date: "2010-07-15",
		revenue: 839030630,
		runtime: 148,
		spoken_languages: [
			{ english_name: "English", iso_639_1: "en", name: "English" },
			{ english_name: "French", iso_639_1: "fr", name: "Français" },
			{ english_name: "Japanese", iso_639_1: "ja", name: "日本語" },
			{ english_name: "Swahili", iso_639_1: "sw", name: "Kiswahili" },
		],
		status: "Released",
		tagline: "Your mind is the scene of the crime.",
		title: "Inception",
		video: false,
		vote_average: 8.37,
		vote_count: 38729,
	},
	{
		adult: false,
		backdrop_path: "/2ssWTSVklAEc98frZUQhgtGHx7s.jpg",
		belongs_to_collection: null,
		budget: 165000000,
		genres: [
			{ id: 12, name: "Adventure" },
			{ id: 18, name: "Drama" },
			{ id: 878, name: "Science Fiction" },
		],
		homepage: "http://www.interstellarmovie.net/",
		id: 157336,
		imdb_id: "tt0816692",
		origin_country: ["US"],
		original_language: "en",
		original_title: "Interstellar",
		overview:
			"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
		popularity: 45.2497,
		poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
		production_companies: [
			{
				id: 923,
				logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
				name: "Legendary Pictures",
				origin_country: "US",
			},
			{
				id: 9996,
				logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
				name: "Syncopy",
				origin_country: "GB",
			},
			{
				id: 13769,
				logo_path: null,
				name: "Lynda Obst Productions",
				origin_country: "US",
			},
		],
		production_countries: [
			{ iso_3166_1: "GB", name: "United Kingdom" },
			{ iso_3166_1: "US", name: "United States of America" },
		],
		release_date: "2014-11-05",
		revenue: 746606706,
		runtime: 169,
		spoken_languages: [
			{ english_name: "English", iso_639_1: "en", name: "English" },
		],
		status: "Released",
		tagline: "Mankind was born on Earth. It was never meant to die here.",
		title: "Interstellar",
		video: false,
		vote_average: 8.467,
		vote_count: 38936,
	},
	{
		adult: false,
		backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
		belongs_to_collection: {
			backdrop_path: "/xyhrCEdB4XRkelfVsqXeUZ6rLHi.jpg",
			id: 263,
			name: "The Dark Knight Collection",
			poster_path: "/ogyw5LTmL53dVxsppcy8Dlm30Fu.jpg",
		},
		budget: 185000000,
		genres: [
			{ id: 28, name: "Action" },
			{ id: 80, name: "Crime" },
			{ id: 53, name: "Thriller" },
		],
		homepage: "https://www.warnerbros.com/movies/dark-knight/",
		id: 155,
		imdb_id: "tt0468569",
		origin_country: ["US"],
		original_language: "en",
		original_title: "The Dark Knight",
		overview:
			"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
		popularity: 26.6164,
		poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
		production_companies: [
			{
				id: 174,
				logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
				name: "Warner Bros. Pictures",
				origin_country: "US",
			},
			{
				id: 923,
				logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
				name: "Legendary Pictures",
				origin_country: "US",
			},
			{
				id: 9996,
				logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
				name: "Syncopy",
				origin_country: "GB",
			},
			{
				id: 429,
				logo_path: "/4Y00XuSMuP1gimd0jP6JT57QbCI.png",
				name: "DC",
				origin_country: "US",
			},
		],
		production_countries: [
			{ iso_3166_1: "GB", name: "United Kingdom" },
			{ iso_3166_1: "US", name: "United States of America" },
		],
		release_date: "2008-07-16",
		revenue: 1004558444,
		runtime: 152,
		spoken_languages: [
			{ english_name: "English", iso_639_1: "en", name: "English" },
			{ english_name: "Mandarin", iso_639_1: "zh", name: "普通话" },
		],
		status: "Released",
		tagline: "Welcome to a world without rules.",
		title: "The Dark Knight",
		video: false,
		vote_average: 8.526,
		vote_count: 35218,
	},
];

const Saved = () => {
	const isEmpty = dummySavedMovies.length === 0;

	return (
		<SafeAreaView className='flex-1 bg-primary'>
			<Image source={images.bg} className='absolute w-full z-0' />

			<View className='px-5 pt-10 flex-1'>
				<Text className='text-white text-2xl font-bold mb-6'>Saved Movies</Text>

				{isEmpty ?
					<View className='flex-1 justify-center items-center'>
						<Text className='text-gray-400 text-lg'>
							No saved movies yet 🎬
						</Text>
						<Text className='text-gray-500 text-sm mt-2'>
							Start saving movies to see them here.
						</Text>
					</View>
				:	<FlatList
						data={dummySavedMovies}
						keyExtractor={(item) => item.id.toString()}
						numColumns={3}
						contentContainerStyle={{ paddingBottom: 100 }}
						columnWrapperStyle={{
							justifyContent: "flex-start",
							gap: 15,
							marginBottom: 15,
						}}
						renderItem={({ item }) => <MoviesCard {...item} />}
					/>
				}
			</View>
		</SafeAreaView>
	);
};

export default Saved;

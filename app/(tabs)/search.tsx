/** @format */

import MoviesCard from "@/components/MoviesCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
	const [searchQuery, setSearchQuery] = React.useState("");

	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
		refetch: refetchMovies,
		reset: resetMovies,
	} = useFetch(() => fetchMovies(searchQuery), false);

	const showNoResults =
		!moviesLoading &&
		!moviesError &&
		searchQuery.trim() &&
		movies?.length === 0;

	// ✅ Correct
	React.useEffect(() => {
		const func = setTimeout(async () => {
			if (searchQuery.trim()) {
				await refetchMovies();
			} else {
				resetMovies();
			}
		}, 500);

		return () => clearTimeout(func);
	}, [searchQuery]);

	return (
		<View className='flex-1 bg-primary'>
			{/* Background Image */}
			<Image
				source={images.bg}
				className='absolute w-full h-full'
				resizeMode='cover'
			/>

			<FlatList
				data={movies || []}
				numColumns={3}
				style={{ flex: 1 }}
				columnWrapperStyle={{
					justifyContent: "center",
					gap: 16,
					marginVertical: 16,
				}}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 10 }}
				ListHeaderComponent={
					<View>
						{/* Logo */}
						<Image
							source={icons.logo}
							className='w-12 h-10 mt-20 mb-5 mx-auto'
						/>

						{/* Search bar */}
						<View className='px-5 my-5'>
							<SearchBar
								value={searchQuery}
								onChangeText={(text) => setSearchQuery(text)}
								placeHolder='Search for a movie'
							/>
						</View>

						{/* Loading or Error */}
						{moviesLoading && (
							<ActivityIndicator
								size='large'
								color='#0000ff'
								className='mt-10'
							/>
						)}
						{moviesError && (
							<Text className='text-red-500 text-lg mt-10'>
								Error: {moviesError}
							</Text>
						)}

						{/* Optional: show number of results */}
						{!moviesLoading && !moviesError && movies?.length > 0 && (
							<Text className='text-white text-xl font-bold mb-5 text-center'>
								Showing top {movies.length} results for{" "}
								<Text className='text-accent font-bold'>{searchQuery}</Text>
							</Text>
						)}
					</View>
				}
				renderItem={({ item }) => <MoviesCard {...item} />}
				ListEmptyComponent={
					!moviesLoading && !moviesError ?
						<Text className='text-white text-center mt-10'>
							{searchQuery.trim() ?
								"No results found for " + searchQuery
							:	"Start typing to search for movies."}
						</Text>
					:	null
				}
			/>
		</View>
	);
};

export default Search;

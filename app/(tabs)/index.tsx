/** @format */

import MoviesCard from "@/components/MoviesCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
	const router = useRouter();

	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() => fetchMovies(""));

	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='absolute w-full z-0' />

			{moviesLoading ?
				<ActivityIndicator size='large' color='#000ff' className='mt-10' />
			: moviesError ?
				<Text className='text-red-500 text-lg mt-10'>Error: {moviesError}</Text>
			:	<FlatList
					data={movies}
					keyExtractor={(item) => item.id.toString()}
					contentContainerStyle={{ paddingBottom: 20 }}
					numColumns={3}
					scrollEnabled={true}
					className='mt-2 pb-32'
					columnWrapperStyle={{
						justifyContent: "flex-start",
						gap: 20,
						paddingRight: 5,
						marginBottom: 10,
					}}
					ListHeaderComponent={
						<>
							<Image
								source={icons.logo}
								className='w-12 h-10 mt-20 mb-5 mx-auto'
							/>

							<View className='px-5'>
								<SearchBar
									onPress={() => router.push("/search")}
									placeHolder='search for a movie'
								/>

								<Text className='text-white text-2xl font-bold mt-10 mb-5'>
									Popular Movies
								</Text>
							</View>
						</>
					}
					renderItem={({ item }) => <MoviesCard {...item} />}
				/>
			}
		</View>
	);
}

/** @format */

import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MoviesCard = ({
	id,
	poster_path,
	title,
	vote_average,
	release_date,
}: Movie) => {
	return (
		<Link href={`/movies/${id}`} asChild className=''>
			<TouchableOpacity className='w-[30%]'>
				<Image
					className='w-full h-52 rounded-lg'
					resizeMode='cover'
					source={{
						uri:
							poster_path ?
								`https://image.tmdb.org/t/p/w500${poster_path}`
							:	"https://placehold.co/500x750?text=No+Image",
					}}
				/>
				<Text className='text-white text-sm mt-2'>{title}</Text>
				<View className='flex-row items-center justify-start gap-x-1'>
					<Image source={icons.star} className='size-4' />
					<Text className='text-white text-xs font-bold uppercase'>
						{Math.round(vote_average / 2)}
					</Text>
				</View>
				<View className='flex-row items-center justify-between mt-1'>
					<Text className='text-white text-xs'>
						{release_date?.split("-")[0]}
					</Text>
					<Text className='text-light-300 text-xs font-medium uppercase'>
						Action
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default MoviesCard;

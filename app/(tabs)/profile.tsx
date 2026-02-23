/** @format */

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dummyUser = {
	name: "John Doe",
	watchlist: 24,
	favorites: 12,
	reviews: 8,
};

const Profile = () => {
	return (
		<SafeAreaView className='flex-1 bg-primary'>
			<Image source={images.bg} className='absolute w-full z-0' />

			<ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
				<View className='px-6 pt-16'>
					{/* Header */}
					<View className='items-center mb-8'>
						<View className='bg-gray-800 p-6 rounded-full mb-4'>
							<Image
								source={icons.person}
								className='size-16'
								tintColor='#fff'
							/>
						</View>

						<Text className='text-white text-xl font-bold'>
							{dummyUser.name}
						</Text>

						<Text className='text-gray-400 text-sm'>Movie Lover 🍿</Text>
					</View>

					{/* Stats */}
					<View className='flex-row justify-between bg-gray-900 rounded-2xl p-5 mb-8'>
						<View className='items-center'>
							<Text className='text-white text-lg font-bold'>
								{dummyUser.watchlist}
							</Text>
							<Text className='text-gray-400 text-xs'>Watchlist</Text>
						</View>

						<View className='items-center'>
							<Text className='text-white text-lg font-bold'>
								{dummyUser.favorites}
							</Text>
							<Text className='text-gray-400 text-xs'>Favorites</Text>
						</View>

						<View className='items-center'>
							<Text className='text-white text-lg font-bold'>
								{dummyUser.reviews}
							</Text>
							<Text className='text-gray-400 text-xs'>Reviews</Text>
						</View>
					</View>

					{/* Action Buttons */}
					<View className='gap-4'>
						<TouchableOpacity className='bg-white rounded-xl py-4 items-center'>
							<Text className='text-black font-semibold'>View Watchlist</Text>
						</TouchableOpacity>

						<TouchableOpacity className='bg-gray-800 rounded-xl py-4 items-center'>
							<Text className='text-white font-semibold'>Account Settings</Text>
						</TouchableOpacity>

						<TouchableOpacity className='bg-red-600 rounded-xl py-4 items-center'>
							<Text className='text-white font-semibold'>Log Out</Text>
						</TouchableOpacity>
					</View>

					{/* Recently Watched Section */}
					<View className='mt-10'>
						<Text className='text-white text-xl font-bold mb-4'>
							Recently Watched
						</Text>

						<View className='flex-row gap-4'>
							<View className='bg-gray-800 w-24 h-36 rounded-lg' />
							<View className='bg-gray-800 w-24 h-36 rounded-lg' />
							<View className='bg-gray-800 w-24 h-36 rounded-lg' />
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;

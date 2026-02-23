/** @format */

import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
	onPress?: () => void;
	placeHolder: string;
	value?: string;
	onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeHolder, value, onChangeText }: Props) => {
	return (
		<View className=' flex-row items-center bg-dark-100 rounded-full px-5 py-4'>
			<Image
				source={icons.search}
				tintColor='#A8B5DB'
				className='size-5'
				resizeMode='contain'
			/>
			<TextInput
				onPress={onPress}
				placeholder={placeHolder}
				value={value}
				placeholderTextColor='#A8B5DB'
				onChangeText={onChangeText}
				className='flex-1 ml-2 text-white'
			/>
		</View>
	);
};

export default SearchBar;

import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center bg-dark-200"
    >
      <Text className="font-bold text-light-100">welcome</Text>
    </SafeAreaView>
  );
}

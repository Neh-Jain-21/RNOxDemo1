import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// STACK
import HomeScreenStack from "@src/Navigation/HomeScreenStack/HomeScreenStack";
import CreatePostStack from "@src/Navigation/CreatePostStack/CreatePostStack";

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />

			<Stack.Navigator>
				{HomeScreenStack({ Stack })}
				{CreatePostStack({ Stack })}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

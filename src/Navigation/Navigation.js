import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// STACK
import AuthStack from "@src/Navigation/AuthStack/AuthStack";
import HomeScreenStack from "@src/Navigation/HomeScreenStack/HomeScreenStack";
import CreatePostStack from "@src/Navigation/CreatePostStack/CreatePostStack";
// HELPERS
import COLORS from "@src/Helpers/Colors";

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor={COLORS.LIGHT} translucent />

			<Stack.Navigator>
				{AuthStack({ Stack })}
				{HomeScreenStack({ Stack })}
				{CreatePostStack({ Stack })}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

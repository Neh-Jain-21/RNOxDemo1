import { TypedNavigator } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// SCREENS
import People from "@src/Screens/People/People";
import Posts from "@src/Screens/Posts/Posts";

const TopTab = createMaterialTopTabNavigator();

/**
 * @typedef HomeScreenStackProps
 * @type {object}
 * @property {TypedNavigator<ParamList extends ParamListBase, State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase, Navigator extends React.ComponentType<any>>} Stack
 */

/** @param {HomeScreenStackProps} props */
const HomeScreenStack = ({ Stack }) => <Stack.Screen name="home" component={HomeScreenTabNavigation} options={{ title: "Home" }} />;

const HomeScreenTabNavigation = () => (
	<TopTab.Navigator initialRouteName="People" backBehavior="initialRoute">
		<TopTab.Screen name="People" component={People} />
		<TopTab.Screen name="Posts" component={Posts} />
	</TopTab.Navigator>
);

export default HomeScreenStack;

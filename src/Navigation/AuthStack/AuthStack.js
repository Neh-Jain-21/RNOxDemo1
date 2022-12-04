import { TypedNavigator } from "@react-navigation/native";
// SCREENS
import Login from "@src/Screens/Login/Login";
import Signup from "@src/Screens/Signup/Signup";
import VerifyOtp from "@src/Screens/VerifyOtp/VerifyOtp";

/**
 * @typedef HomeScreenStackProps
 * @type {object}
 * @property {TypedNavigator<ParamList extends ParamListBase, State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase, Navigator extends React.ComponentType<any>>} Stack
 */

/** @param {HomeScreenStackProps} props */
const AuthStack = ({ Stack }) => (
	<Stack.Group screenOptions={{ headerShown: false }}>
		<Stack.Screen name="verifyOtp" component={VerifyOtp} />
		<Stack.Screen name="login" component={Login} />
		<Stack.Screen name="signup" component={Signup} />
	</Stack.Group>
);

export default AuthStack;

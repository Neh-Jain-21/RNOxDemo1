import { TypedNavigator } from "@react-navigation/native";
// SCREENS
import CreatePost from "@src/Screens/CreatePost/CreatePost";

/**
 * @typedef HomeScreenStackProps
 * @type {object}
 * @property {TypedNavigator<ParamList extends ParamListBase, State extends NavigationState, ScreenOptions extends {}, EventMap extends EventMapBase, Navigator extends React.ComponentType<any>>} Stack
 */

/** @param {HomeScreenStackProps} props */
const CreatePostStack = ({ Stack }) => <Stack.Screen name="createPost" component={CreatePost} options={{ title: "Create Post" }} />;

export default CreatePostStack;

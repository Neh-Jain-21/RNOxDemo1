import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// REDUX
import { updateFollowers } from "@src/Redux/users/reducer";
// STYLES
import styles from "@src/Screens/People/People.style";

const People = () => {
	const dispatch = useDispatch();

	const usersReduxState = useSelector((state) => state.Users);

	const handleFollowOrUnfollow = (id, addFollower) => () => dispatch(updateFollowers({ id, addFollower }));

	return (
		<FlatList
			data={usersReduxState.users}
			renderItem={({ item }) => {
				const meFollowing = item.followers.find((id) => id === usersReduxState.profile.id);

				return (
					<View style={styles.userContainer}>
						<Text style={styles.userText}>{item.name}</Text>

						<TouchableOpacity style={[{ backgroundColor: meFollowing ? "black" : "#4285F4" }, styles.btn]} onPress={handleFollowOrUnfollow(item.id, meFollowing)}>
							<Text style={styles.btnText}>{meFollowing ? "Unfollow" : "Follow"}</Text>
						</TouchableOpacity>
					</View>
				);
			}}
		/>
	);
};

export default People;

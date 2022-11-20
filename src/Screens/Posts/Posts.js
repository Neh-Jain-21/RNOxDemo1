import { useState } from "react";
import { FlatList, View, TouchableOpacity, Modal, Image } from "react-native";
import Video from "react-native-video";
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS
import PostCard from "@src/Components/PostCard/PostCard";
// STYLES
import styles from "@src/Screens/Posts/Posts.style";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const Posts = ({ navigation }) => {
	const dispatch = useDispatch();

	const posts = useSelector((state) => state.Posts.posts);
	const userId = useSelector((state) => state.Users.profile.id);

	const [imageOrVideoModal, setImageOrVideoModal] = useState({ visible: false, data: null });

	const navigateToCreatePost = () => navigation.navigate("createPost", { postLength: posts?.length });

	return (
		<>
			<FlatList
				style={styles.postsList}
				showsVerticalScrollIndicator={false}
				data={posts}
				renderItem={({ item }) => <PostCard item={item} setImageOrVideoModal={setImageOrVideoModal} dispatch={dispatch} userId={userId} />}
			/>

			<View style={styles.addPostBtnContainer}>
				<TouchableOpacity activeOpacity={0.8} style={styles.addPostBtn} onPress={navigateToCreatePost}>
					<FontAwesomeIcon icon={faPlus} size={20} color={COLORS.LIGHT} />
				</TouchableOpacity>
			</View>

			<ImageOrVideoModal imageOrVideoModal={imageOrVideoModal} setImageOrVideoModal={setImageOrVideoModal} />
		</>
	);
};

const ImageOrVideoModal = (props) => {
	const handleCloseModal = () => props.setImageOrVideoModal({ visible: false, data: null });

	return (
		<Modal animationType="fade" visible={props.imageOrVideoModal.visible} transparent statusBarTranslucent>
			<View style={styles.imageOrVideoModal}>
				<View style={styles.imageOrVideoContainer}>
					{props.imageOrVideoModal?.data?.type === UPLOAD_TYPES.IMAGE
						? props.imageOrVideoModal?.data?.uri && <Image style={{ width: "90%", resizeMode: "contain", minHeight: 300 }} source={{ uri: props.imageOrVideoModal.data.uri }} />
						: props.imageOrVideoModal?.data?.uri && <Video style={{ width: "90%", minHeight: 300 }} controls source={{ uri: props.imageOrVideoModal.data.uri }} />}
				</View>

				<View style={styles.closeImageOrVideoModalBtnContainer}>
					<TouchableOpacity activeOpacity={0.8} style={styles.closeImageOrVideoModalBtn} onPress={handleCloseModal}>
						<FontAwesomeIcon icon={faPlus} size={30} color={COLORS.LIGHT_SECONDARY} transform={{ rotate: 45 }} />
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default Posts;

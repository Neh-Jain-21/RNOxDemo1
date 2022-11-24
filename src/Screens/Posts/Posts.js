import { useState } from "react";
import { FlatList, View, TouchableOpacity, Modal } from "react-native";
import Video from "react-native-video";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from "react-native-image-zoom-viewer";
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
				renderItem={({ item }) => <PostCard post={item} setImageOrVideoModal={setImageOrVideoModal} dispatch={dispatch} userId={userId} />}
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

	const imagesUrls = props?.imageOrVideoModal?.data?.images
		?.map((image) => image.type === UPLOAD_TYPES.IMAGE && { url: image.uri, width: "90%", resizeMode: "contain", minHeight: 300 })
		.filter((image) => image);

	const currentImageIndex = imagesUrls?.findIndex((image) => image.url === props?.imageOrVideoModal?.data?.clickedImage?.uri);

	return (
		<Modal visible={props.imageOrVideoModal.visible} statusBarTranslucent transparent={true}>
			{props?.imageOrVideoModal?.data?.clickedImage?.type === UPLOAD_TYPES.IMAGE ? (
				<ImageViewer enableSwipeDown onCancel={handleCloseModal} onSwipeDown={handleCloseModal} index={currentImageIndex === -1 ? 0 : currentImageIndex} imageUrls={imagesUrls} />
			) : (
				<View style={styles.imageOrVideoModal}>
					<View style={styles.imageOrVideoContainer}>
						<Video style={{ width: "90%", minHeight: 300 }} controls source={{ uri: props?.imageOrVideoModal?.data?.clickedImage?.uri }} />
					</View>

					<View style={styles.closeImageOrVideoModalBtnContainer}>
						<TouchableOpacity activeOpacity={0.8} style={styles.closeImageOrVideoModalBtn} onPress={handleCloseModal}>
							<FontAwesomeIcon icon={faPlus} size={30} color={COLORS.LIGHT_SECONDARY} transform={{ rotate: 45 }} />
						</TouchableOpacity>
					</View>
				</View>
			)}
		</Modal>
	);
};

export default Posts;

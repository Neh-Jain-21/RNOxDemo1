import { Text, FlatList, View, Image, TouchableOpacity } from "react-native";
import Video from "react-native-video";
// STYLES
import styles from "@src/Components/PostCard/PostCard.style";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart as HeartSolidIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as HeartRegularIcon } from "@fortawesome/free-regular-svg-icons";
// REDUX
import { likeOrUnlikePost } from "@src/Redux/posts/reducer";
// HELPERS
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const PostCard = ({ item, setImageOrVideoModal, dispatch, userId }) => {
	const handleLikeOrUnlike = () => dispatch(likeOrUnlikePost({ id: item.id, userId }));

	return (
		<View style={styles.card}>
			<FlatList
				data={item.images}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => <ImageOrVideoComponent item={item} setImageOrVideoModal={setImageOrVideoModal} />}
			/>

			<Text style={styles.commentText}>{item.comment}</Text>

			<TouchableOpacity activeOpacity={0.8} style={styles.likesContainer} onPress={handleLikeOrUnlike}>
				{item.likes.includes(userId) ? <FontAwesomeIcon icon={HeartSolidIcon} color="red" size={20} /> : <FontAwesomeIcon icon={HeartRegularIcon} color="red" size={20} />}

				<Text style={styles.likesText}>{item.likes.length}</Text>
			</TouchableOpacity>
		</View>
	);
};

const ImageOrVideoComponent = ({ item, setImageOrVideoModal }) => {
	const handlePressImageOrVideo = () => setImageOrVideoModal({ visible: true, data: item });

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={handlePressImageOrVideo}>
			{item.type === UPLOAD_TYPES.IMAGE ? (
				<Image style={styles.postImages} source={{ uri: item.uri }} />
			) : (
				<Video style={styles.postImages} resizeMode="cover" muted source={{ uri: item.uri }} />
			)}
		</TouchableOpacity>
	);
};

export default PostCard;

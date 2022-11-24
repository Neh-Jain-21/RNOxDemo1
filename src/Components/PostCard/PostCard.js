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
import COLORS from "@src/Helpers/Colors";
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const PostCard = ({ post, setImageOrVideoModal, dispatch, userId }) => {
	const handleLikeOrUnlike = () => dispatch(likeOrUnlikePost({ id: post.id, userId }));

	return (
		<View style={styles.card}>
			<FlatList
				data={post.images}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => <ImageOrVideoComponent index={index} item={item} images={post.images} setImageOrVideoModal={setImageOrVideoModal} />}
			/>

			<Text style={styles.commentText}>{post.comment}</Text>

			<TouchableOpacity activeOpacity={0.8} style={styles.likesContainer} onPress={handleLikeOrUnlike}>
				{post.likes.includes(userId) ? (
					<FontAwesomeIcon icon={HeartSolidIcon} color={COLORS.SECONDARY} size={20} />
				) : (
					<FontAwesomeIcon icon={HeartRegularIcon} color={COLORS.SECONDARY} size={20} />
				)}

				<Text style={styles.likesText}>{post.likes.length}</Text>
			</TouchableOpacity>
		</View>
	);
};

const ImageOrVideoComponent = ({ index, item, images, setImageOrVideoModal }) => {
	const handlePressImageOrVideo = () => setImageOrVideoModal({ visible: true, data: { images, clickedImage: images[index] } });

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

import { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Video from "react-native-video";
import { launchImageLibrary } from "react-native-image-picker";
// STYLES
import styles from "@src/Screens/CreatePost/CreatePost.style";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudArrowUp, faClose } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { addPost } from "@src/Redux/posts/reducer";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const CreatePost = (props) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const usersIFollow = useSelector((state) => {
		const myUserId = state.Users.profile.id;
		return state.Users.users.filter((user) => user.followers.includes(myUserId));
	});

	const [descriptionValue, setDescriptionValue] = useState("");
	const [descriptionError, setDescriptionError] = useState("");
	const [mediaData, setMediaData] = useState([]);
	const [tagUserModalOpen, setTagUserModalOpen] = useState(false);
	const [taggedUsers, setTaggedUsers] = useState([]);

	/** @param {string} value */
	const handleChangeDescription = (value) => {
		const charAt = value[value.length - 1];

		if (charAt === "@") {
			setTagUserModalOpen(true);
			setDescriptionValue(value);
		} else {
			setDescriptionValue(value);

			if (descriptionError !== "") setDescriptionError("");
			if (value === "") setDescriptionError("Description is required!");
		}
	};

	const handleUploadMedia = async () => {
		const data = await launchImageLibrary({ mediaType: "mixed", selectionLimit: 4 });

		if (!data.didCancel) {
			setMediaData((prev) => [...prev, ...data.assets.slice(0, 4).map((asset) => ({ type: asset.type.includes("image") ? UPLOAD_TYPES.IMAGE : UPLOAD_TYPES.VIDEO, uri: asset.uri }))]);
		}
	};

	const handleDeleteMedia = (filterIndex) => () => setMediaData((prev) => prev.filter((_, index) => index !== filterIndex));

	const handleCancelUpload = () => navigation.goBack();

	const handleUpload = () => {
		if (descriptionValue === "") setDescriptionError("Description is required!");
		else {
			dispatch(addPost({ id: props.route.params.postLength + 1, images: mediaData, comment: descriptionValue, likes: [] }));

			navigation.goBack();
		}
	};

	return (
		<>
			<ScrollView style={styles.createPostContainer}>
				<Text style={styles.descriptionText}>
					Description <Text style={styles.requiredSign}>*</Text>
				</Text>
				<TextInput
					style={styles.descriptionInput}
					placeholder="Enter Description"
					placeholderTextColor={COLORS.LIGHT_SECONDARY}
					multiline
					numberOfLines={5}
					textAlignVertical="top"
					value={descriptionValue}
					onChangeText={handleChangeDescription}
				/>
				<Text style={styles.errorMessage}>{descriptionError}</Text>

				{mediaData.length > 0 && (
					<>
						<Text style={styles.mediaText}>Media</Text>
						<FlatList
							horizontal
							data={mediaData}
							showsHorizontalScrollIndicator={false}
							renderItem={({ item, index }) => (
								<View>
									<TouchableOpacity activeOpacity={0.8} style={styles.postImagesIconContainer} onPress={handleDeleteMedia(index)}>
										<FontAwesomeIcon icon={faClose} size={20} color={COLORS.DARK} />
									</TouchableOpacity>

									{item.type === UPLOAD_TYPES.IMAGE ? (
										<Image style={styles.postImages} source={{ uri: item.uri }} />
									) : (
										<Video muted style={styles.postImages} resizeMode="cover" playWhenInactive source={{ uri: item.uri }} />
									)}
								</View>
							)}
						/>
					</>
				)}

				{mediaData.length < 4 && (
					<View style={styles.imagePickerContainer}>
						<TouchableOpacity activeOpacity={0.8} style={styles.imagePickerView} onPress={handleUploadMedia}>
							<FontAwesomeIcon style={styles.cloudUploadIcon} icon={faCloudArrowUp} size={50} color={COLORS.LIGHT} />
							<Text style={styles.imagePickerTextBlue}>Click here to upload</Text>
						</TouchableOpacity>
					</View>
				)}

				<View style={styles.footerBtnContainer}>
					<TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn} onPress={handleCancelUpload}>
						<Text style={styles.btnText}>Cancel</Text>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.8} style={styles.postBtn} onPress={handleUpload}>
						<Text style={styles.btnText}>Done</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<TagUserModal
				tagUserModalOpen={tagUserModalOpen}
				setTagUserModalOpen={setTagUserModalOpen}
				usersIFollow={usersIFollow}
				setDescriptionValue={setDescriptionValue}
				taggedUsers={taggedUsers}
				setTaggedUsers={setTaggedUsers}
			/>
		</>
	);
};

const TagUserModal = (props) => {
	const usersIFollow = props.usersIFollow.filter((user) => !props.taggedUsers?.includes(user.id));

	const [searchedUser, setSearchedUser] = useState("");

	const handelCloseModal = () => {
		setSearchedUser("");

		props.setDescriptionValue((prev) => prev.slice(0, prev.length - 1));
		props.setTagUserModalOpen(false);
	};

	const handlePressUser = (item) => () => {
		props.setTaggedUsers((prev) => {
			prev.push(item.id);
			return prev;
		});
		props.setDescriptionValue((prev) => prev + item.name);
		props.setTagUserModalOpen(false);
	};

	return (
		<Modal visible={props.tagUserModalOpen} transparent animationType="slide">
			<View style={styles.tagUserModalContainer}>
				<TouchableOpacity activeOpacity={0.8} style={styles.tagUserCloseBtn} onPress={handelCloseModal}>
					<FontAwesomeIcon style={styles.cloudUploadIcon} icon={faClose} size={20} color={COLORS.DARK} />
				</TouchableOpacity>

				<TextInput style={styles.tagUserSearch} autoFocus placeholder="Search User" placeholderTextColor={COLORS.LIGHT_SECONDARY} value={searchedUser} onChangeText={setSearchedUser} />

				<FlatList
					data={searchedUser !== "" ? usersIFollow.filter((user) => user.name.includes(searchedUser)) : usersIFollow}
					renderItem={({ item }) => (
						<TouchableOpacity activeOpacity={0.8} style={styles.tagUserView} onPress={handlePressUser(item)}>
							<Text style={{ color: COLORS.DARK }}>{item.name}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</Modal>
	);
};

export default CreatePost;

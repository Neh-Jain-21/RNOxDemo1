import { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, Modal, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Video from "react-native-video";
import { launchImageLibrary } from "react-native-image-picker";
// STYLES
import styles from "@src/Screens/Signup/Signup.style";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudArrowUp, faClose } from "@fortawesome/free-solid-svg-icons";
// REDUX
import { addPost } from "@src/Redux/posts/reducer";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const Signup = (props) => {
	return (
		<SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
			<Text style={{ color: "white", fontSize: 14, backgroundColor: "white" }}>Signup</Text>
		</SafeAreaView>
	);
};

export default Signup;

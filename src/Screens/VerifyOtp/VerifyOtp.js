import { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ScrollView, Modal, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Video from "react-native-video";
import { launchImageLibrary } from "react-native-image-picker";
import OTPInputView from "@twotalltotems/react-native-otp-input";
// STYLES
import styles from "@src/Screens/VerifyOtp/VerifyOtp.style";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCloudArrowUp, faClose } from "@fortawesome/free-solid-svg-icons";
// IMAGES
import { VerifyOtp_Image } from "@src/Assets/Images/IMAGES";
// REDUX
import { addPost } from "@src/Redux/posts/reducer";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { UPLOAD_TYPES } from "@src/Helpers/Constants";

const VerifyOtp = () => {
	const [code, setCode] = useState("");
	const [resendOtpTimer, setResendOtpTimer] = useState(30);

	const handleCodeFilled = (code) => setCode(code);

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.image} resizeMode="contain" source={VerifyOtp_Image} />

			<Text style={styles.headerText}>Verfiy OTP</Text>

			<OTPInputView pinCount={4} autoFocusOnLoad onCodeFilled={handleCodeFilled} style={styles.otpInput} />

			{code !== "" && <View>Resend OTP in {}</View>}

			<TouchableOpacity disabled={code === ""} activeOpacity={0.8} style={styles.signupBtn} onPress={undefined}>
				<Text style={styles.signupBtnText}>Verify OTP</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default VerifyOtp;

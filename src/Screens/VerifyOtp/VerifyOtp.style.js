import { StyleSheet, Image } from "react-native";
// IMAGES
import { VerifyOtp_Image } from "@src/Assets/Images/IMAGES";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { BORDER_RADIUS, HORIZONTAL_DIMENSIONS, MARGIN, PADDING, _DEVICE_WIDTH, _STATUS_BAR_HEIGHT } from "@src/Helpers/Dimensions";

const VerifyOtp_Image_Dimensions = Image.resolveAssetSource(VerifyOtp_Image);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
		padding: PADDING._10,
		marginTop: _STATUS_BAR_HEIGHT,
		backgroundColor: COLORS.LIGHT,
	},
	image: {
		width: _DEVICE_WIDTH - 2 * PADDING._10,
		height: (_DEVICE_WIDTH - 2 * PADDING._10) * (VerifyOtp_Image_Dimensions.height / VerifyOtp_Image_Dimensions.width),
	},
	errorMessage: {
		color: COLORS.SECONDARY,
		marginTop: MARGIN._2,
		marginBottom: MARGIN._15,
	},
	headerText: {
		fontSize: 40,
		color: COLORS.DARK,
		marginVertical: MARGIN._30,
	},
	otpInput: {
		width: "100%",
		paddingHorizontal: PADDING._30,
		height: HORIZONTAL_DIMENSIONS._100,
	},
	signupBtn: {
		elevation: 10,
		display: "flex",
		marginTop: MARGIN._20,
		justifyContent: "center",
		borderRadius: BORDER_RADIUS._5,
		backgroundColor: COLORS.PRIMARY,
		height: HORIZONTAL_DIMENSIONS._40,
		width: _DEVICE_WIDTH - 2 * PADDING._10,
	},
	signupBtnText: {
		fontSize: 16,
		color: COLORS.LIGHT,
		textAlign: "center",
	},
});

export default styles;

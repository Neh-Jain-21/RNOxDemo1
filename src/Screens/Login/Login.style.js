import { StyleSheet, Image } from "react-native";
// IMAGES
import { Singup_Image } from "@src/Assets/Images/IMAGES";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { BORDER_RADIUS, HORIZONTAL_DIMENSIONS, MARGIN, PADDING, _STATUS_BAR_HEIGHT, _DEVICE_WIDTH } from "@src/Helpers/Dimensions";

const Singup_Image_Dimensions = Image.resolveAssetSource(Singup_Image);

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
		height: (_DEVICE_WIDTH - 2 * PADDING._10) * (Singup_Image_Dimensions.height / Singup_Image_Dimensions.width),
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
	phoneNumberInputContainer: {
		width: "100%",
		borderWidth: 1,
		color: COLORS.DARK,
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._5,
		height: HORIZONTAL_DIMENSIONS._50,
		borderColor: COLORS.LIGHT_SECONDARY,
	},
	phoneNumberInput: {
		height: HORIZONTAL_DIMENSIONS._50,
	},
	userNameInput: {
		fontSize: 14,
		borderWidth: 1,
		color: COLORS.DARK,
		padding: PADDING._10,
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._5,
		height: HORIZONTAL_DIMENSIONS._50,
		borderColor: COLORS.LIGHT_SECONDARY,
	},
	passwordInput: {
		fontSize: 14,
		borderWidth: 1,
		color: COLORS.DARK,
		padding: PADDING._10,
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._5,
		height: HORIZONTAL_DIMENSIONS._50,
		borderColor: COLORS.LIGHT_SECONDARY,
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

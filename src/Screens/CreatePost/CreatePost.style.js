const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { BORDER_RADIUS, HORIZONTAL_DIMENSIONS, MARGIN, PADDING, VERTICAL_DIMENSIONS } from "@src/Helpers/Dimensions";

const styles = StyleSheet.create({
	createPostContainer: {
		padding: PADDING._10,
	},
	requiredSign: {
		color: COLORS.SECONDARY,
	},
	descriptionText: {
		fontSize: 14,
		color: COLORS.DARK,
		textAlign: "center",
		marginBottom: MARGIN._10,
	},
	descriptionInput: {
		borderWidth: 1,
		color: COLORS.DARK,
		padding: PADDING._10,
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._5,
		borderColor: COLORS.LIGHT_SECONDARY,
	},
	errorMessage: {
		color: COLORS.SECONDARY,
	},
	mediaText: {
		fontSize: 14,
		color: COLORS.DARK,
		textAlign: "center",
		marginTop: MARGIN._20,
		marginBottom: MARGIN._10,
	},
	postImagesIconContainer: {
		top: 0,
		right: 0,
		zIndex: 10,
		display: "flex",
		padding: PADDING._2,
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._20,
	},
	postImages: {
		margin: MARGIN._8,
		height: VERTICAL_DIMENSIONS._100,
		width: HORIZONTAL_DIMENSIONS._100,
	},
	imagePickerContainer: {
		marginTop: MARGIN._30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	imagePickerView: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "lightgrey",
		borderRadius: BORDER_RADIUS._20,
		height: VERTICAL_DIMENSIONS._150,
		width: HORIZONTAL_DIMENSIONS._150,
	},
	cloudUploadIcon: {
		marginBottom: MARGIN._10,
	},
	imagePickerTextBlue: {
		color: COLORS.PRIMARY,
	},
	footerBtnContainer: {
		display: "flex",
		flexDirection: "row",
		marginTop: MARGIN._40,
		justifyContent: "space-evenly",
	},
	cancelBtn: {
		elevation: 10,
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		borderRadius: BORDER_RADIUS._8,
		height: VERTICAL_DIMENSIONS._32,
		width: HORIZONTAL_DIMENSIONS._70,
		backgroundColor: COLORS.SECONDARY,
	},
	postBtn: {
		elevation: 10,
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		borderRadius: BORDER_RADIUS._8,
		height: VERTICAL_DIMENSIONS._32,
		backgroundColor: COLORS.PRIMARY,
		width: HORIZONTAL_DIMENSIONS._70,
	},
	btnText: {
		color: COLORS.LIGHT,
	},

	tagUserModalContainer: {
		marginTop: "auto",
		borderTopWidth: 1,
		backgroundColor: COLORS.LIGHT,
		height: VERTICAL_DIMENSIONS._200,
		borderTopColor: COLORS.LIGHT_SECONDARY,
	},
	tagUserView: {
		padding: PADDING._10,
		borderBottomWidth: 0.5,
		height: VERTICAL_DIMENSIONS._40,
		borderBottomColor: COLORS.LIGHT_SECONDARY,
	},
	tagUserCloseBtn: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingTop: PADDING._30,
		justifyContent: "flex-end",
		paddingHorizontal: PADDING._10,
		height: VERTICAL_DIMENSIONS._20,
	},
	tagUserSearch: {
		color: COLORS.DARK,
	},
});

export default styles;

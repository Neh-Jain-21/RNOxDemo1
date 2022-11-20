const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";

const styles = StyleSheet.create({
	createPostContainer: {
		padding: 10,
	},
	requiredSign: {
		color: COLORS.SECONDARY,
	},
	descriptionText: {
		fontSize: 14,
		color: COLORS.DARK,
		marginBottom: 10,
		textAlign: "center",
	},
	descriptionInput: {
		padding: 10,
		borderWidth: 1,
		color: COLORS.DARK,
		borderRadius: 10,
		borderColor: COLORS.LIGHT_SECONDARY,
		backgroundColor: COLORS.LIGHT,
	},
	errorMessage: {
		color: COLORS.SECONDARY,
	},
	mediaText: {
		fontSize: 14,
		marginTop: 20,
		color: COLORS.DARK,
		marginBottom: 10,
		textAlign: "center",
	},
	postImagesIconContainer: {
		top: 0,
		right: 0,
		zIndex: 10,
		padding: 2,
		display: "flex",
		borderRadius: 20,
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.LIGHT,
	},
	postImages: {
		margin: 8,
		width: 100,
		height: 100,
	},
	imagePickerContainer: {
		marginTop: 30,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	imagePickerView: {
		width: 150,
		height: 150,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "lightgrey",
		borderRadius: 10,
	},
	cloudUploadIcon: {
		marginBottom: 10,
	},
	imagePickerTextBlue: {
		color: COLORS.PRIMARY,
	},
	footerBtnContainer: {
		marginTop: 40,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	cancelBtn: {
		width: 70,
		height: 32,
		elevation: 10,
		display: "flex",
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: COLORS.SECONDARY,
		justifyContent: "center",
	},
	postBtn: {
		width: 70,
		height: 32,
		elevation: 10,
		display: "flex",
		borderRadius: 8,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: COLORS.PRIMARY,
	},
	btnText: {
		color: COLORS.LIGHT,
	},

	tagUserModalContainer: {
		height: 200,
		marginTop: "auto",
		backgroundColor: COLORS.LIGHT,
		borderTopWidth: 1,
		borderTopColor: COLORS.LIGHT_SECONDARY,
	},
	tagUserView: {
		height: 40,
		padding: 10,
		borderBottomWidth: 0.5,
		borderBottomColor: COLORS.LIGHT_SECONDARY,
	},
	tagUserCloseBtn: {
		height: 20,
		width: "100%",
		paddingTop: 30,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		justifyContent: "flex-end",
	},
	tagUserSearch: {
		color: COLORS.DARK,
	},
});

export default styles;

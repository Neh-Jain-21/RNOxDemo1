const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
	createPostContainer: {
		padding: 10,
	},
	requiredSign: {
		color: "red",
	},
	descriptionText: {
		fontSize: 14,
		color: "black",
		marginBottom: 10,
		textAlign: "center",
	},
	descriptionInput: {
		padding: 10,
		borderWidth: 1,
		color: "black",
		borderRadius: 10,
		borderColor: "grey",
		backgroundColor: "#fff",
	},
	errorMessage: {
		color: "red",
	},
	mediaText: {
		fontSize: 14,
		marginTop: 20,
		color: "black",
		marginBottom: 10,
		textAlign: "center",
	},
	postImages: {
		margin: 5,
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
		color: "#4285F4",
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
		backgroundColor: "red",
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
		backgroundColor: "#4285F4",
	},
	btnText: {
		color: "white",
	},

	tagUserModalContainer: {
		height: 200,
		marginTop: "auto",
		backgroundColor: "white",
		borderTopWidth: 1,
		borderTopColor: "grey",
	},
	tagUserView: {
		height: 40,
		padding: 10,
		borderBottomWidth: 0.5,
		borderBottomColor: "grey",
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
		color: "black",
	},
});

export default styles;

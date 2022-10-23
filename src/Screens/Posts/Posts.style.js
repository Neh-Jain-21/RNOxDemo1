const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
	postsList: {
		marginTop: 10,
	},
	addPostBtnContainer: {
		padding: 10,
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	addPostBtn: {
		width: 50,
		height: 50,
		elevation: 4,
		display: "flex",
		borderRadius: 25,
		alignItems: "center",
		backgroundColor: "#4285F4",
		justifyContent: "center",
	},

	imageOrVideoModal: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	imageOrVideoContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	closeImageOrVideoModalBtnContainer: {
		padding: 10,
		width: "100%",
		display: "flex",
		marginTop: "auto",
		flexDirection: "row",
		justifyContent: "center",
	},
	closeImageOrVideoModalBtn: {
		width: 50,
		height: 50,
		elevation: 4,
		display: "flex",
		borderRadius: 25,
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "center",
	},
});

export default styles;

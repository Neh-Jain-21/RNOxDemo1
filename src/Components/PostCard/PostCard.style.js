const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
	card: {
		padding: 10,
		elevation: 2,
		marginBottom: 10,
		borderRadius: 5,
		marginHorizontal: 10,
		backgroundColor: "white",
	},
	postImages: {
		margin: 5,
		width: 100,
		height: 100,
	},
	commentText: {
		marginTop: 10,
		color: "black",
	},
	likesContainer: {
		marginTop: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	likesText: {
		marginLeft: 6,
		color: "black",
		fontWeight: "bold",
	},
});

export default styles;

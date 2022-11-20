const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";

const styles = StyleSheet.create({
	card: {
		padding: 10,
		elevation: 2,
		marginBottom: 10,
		borderRadius: 5,
		marginHorizontal: 10,
		backgroundColor: COLORS.LIGHT,
	},
	postImages: {
		margin: 5,
		width: 100,
		height: 100,
	},
	commentText: {
		marginTop: 10,
		color: COLORS.DARK,
	},
	likesContainer: {
		marginTop: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	likesText: {
		marginLeft: 6,
		color: COLORS.DARK,
		fontWeight: "bold",
	},
});

export default styles;

const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { PADDING, MARGIN, BORDER_RADIUS, HORIZONTAL_DIMENSIONS, VERTICAL_DIMENSIONS } from "@src/Helpers/Dimensions";

const styles = StyleSheet.create({
	card: {
		elevation: 2,
		padding: PADDING._10,
		marginBottom: MARGIN._10,
		marginHorizontal: MARGIN._10,
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._5,
	},
	postImages: {
		margin: MARGIN._5,
		height: VERTICAL_DIMENSIONS._100,
		width: HORIZONTAL_DIMENSIONS._100,
	},
	commentText: {
		color: COLORS.DARK,
		marginTop: MARGIN._10,
	},
	likesContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginTop: MARGIN._10,
	},
	likesText: {
		color: COLORS.DARK,
		fontWeight: "bold",
		marginLeft: MARGIN._6,
	},
});

export default styles;

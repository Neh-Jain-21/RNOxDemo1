import { StyleSheet } from "react-native";
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { MARGIN, PADDING, HORIZONTAL_DIMENSIONS, VERTICAL_DIMENSIONS, BORDER_RADIUS } from "@src/Helpers/Dimensions";

const styles = StyleSheet.create({
	postsList: {
		marginTop: MARGIN._10,
	},
	addPostBtnContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		padding: PADDING._10,
		justifyContent: "center",
	},
	addPostBtn: {
		elevation: 4,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: BORDER_RADIUS._25,
		height: VERTICAL_DIMENSIONS._50,
		backgroundColor: COLORS.PRIMARY,
		width: HORIZONTAL_DIMENSIONS._50,
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
		width: "100%",
		display: "flex",
		marginTop: "auto",
		flexDirection: "row",
		padding: PADDING._10,
		justifyContent: "center",
	},
	closeImageOrVideoModalBtn: {
		elevation: 4,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.LIGHT,
		borderRadius: BORDER_RADIUS._25,
		height: VERTICAL_DIMENSIONS._50,
		width: HORIZONTAL_DIMENSIONS._50,
	},
});

export default styles;

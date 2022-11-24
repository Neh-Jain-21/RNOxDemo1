const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";
import { PADDING, BORDER_RADIUS } from "@src/Helpers/Dimensions";

const styles = StyleSheet.create({
	userContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: PADDING._15,
		justifyContent: "space-between",
	},
	userText: {
		color: COLORS.DARK,
		fontWeight: "bold",
	},
	btn: {
		paddingVertical: PADDING._5,
		paddingHorizontal: PADDING._15,
		borderRadius: BORDER_RADIUS._5,
	},
	btnText: {
		color: COLORS.LIGHT,
	},
});

export default styles;

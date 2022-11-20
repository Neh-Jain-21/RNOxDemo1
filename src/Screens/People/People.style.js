const { StyleSheet } = require("react-native");
// HELPERS
import COLORS from "@src/Helpers/Colors";

const styles = StyleSheet.create({
	userContainer: {
		padding: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	userText: {
		color: COLORS.DARK,
		fontWeight: "bold",
	},
	btn: {
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 20,
	},
	btnText: {
		color: COLORS.LIGHT,
	},
});

export default styles;

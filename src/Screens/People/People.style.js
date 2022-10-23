const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
	userContainer: {
		padding: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	userText: {
		color: "black",
		fontWeight: "bold",
	},
	btn: {
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 20,
	},
	btnText: {
		color: "white",
	},
});

export default styles;

import { useState } from "react";
import { Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
// STYLES
import styles from "@src/Screens/Login/Login.style";
import { Singup_Image } from "@src/Assets/Images/IMAGES";

const Login = () => {
	const [values, setValues] = useState({ userName: { value: "", error: "" }, phoneNumber: { value: "", error: "" }, password: { value: "", error: "" } });

	const handleChangeValue = (key) => (text) => setValues((prev) => ({ ...prev, [key]: { value: text, error: "" } }));

	const handleSignup = () => {
		const validUsernameRegex = new RegExp(/^[a-z0-9_\.]+$/);
		const validUsername = validUsernameRegex.test(values.userName.value);

		if (values.userName.value === "") setValues((prev) => ({ ...prev, userName: { ...prev.userName, error: "Username is required!" } }));
		else if (!validUsername) setValues((prev) => ({ ...prev, userName: { ...prev.userName, error: "Username can only contain lowercase letters, numbers, dots(.) and underscores (_)" } }));

		if (values.phoneNumber.value === "") setValues((prev) => ({ ...prev, phoneNumber: { ...prev.phoneNumber, error: "Phone Number is required!" } }));

		if (values.password.value === "") setValues((prev) => ({ ...prev, password: { ...prev.password, error: "Password is required!" } }));

		if (values.userName.value !== "" && values.phoneNumber.value !== "" && values.password.value !== "" && validUsername) {
		}
	};

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.image} resizeMode="contain" source={Singup_Image} />

			<Text style={styles.headerText}>Sign Up</Text>

			<PhoneInput
				layout="first"
				defaultCode="IN"
				value={values.phoneNumber.value}
				textInputStyle={styles.phoneNumberInput}
				onChangeText={handleChangeValue("phoneNumber")}
				containerStyle={styles.phoneNumberInputContainer}
				onChangeFormattedText={handleChangeValue("phoneNumber")}
			/>
			<Text style={styles.errorMessage}>{values.phoneNumber.error}</Text>

			<TextInput placeholder="Username" value={values.userName.value} onChangeText={handleChangeValue("userName")} style={styles.userNameInput} />
			<Text style={styles.errorMessage}>{values.userName.error}</Text>

			<TextInput placeholder="Password" secureTextEntry value={values.password.value} onChangeText={handleChangeValue("password")} style={styles.passwordInput} />
			<Text style={styles.errorMessage}>{values.password.error}</Text>

			<TouchableOpacity activeOpacity={0.8} style={styles.signupBtn} onPress={handleSignup}>
				<Text style={styles.signupBtnText}>Sign Up</Text>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default Login;

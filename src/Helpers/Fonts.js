// THESE FILES INCLUDE THE FONT FAMILY & FONT SIZE THAT ARE TO BE USED IN THE APP
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { _DEVICE_HEIGHT, _DEVICE_WIDTH } from "./Dimensions";

// responsive font size that will change on each device based on the height of that device
export const FONT_SIZE = {
	_70: RFValue(70, _DEVICE_HEIGHT),
	_35: RFValue(35, _DEVICE_HEIGHT),
	_32: RFValue(32, _DEVICE_HEIGHT),
	_30: RFValue(30, _DEVICE_HEIGHT),
	_27_8: RFValue(27.8, _DEVICE_HEIGHT),
	_25: RFValue(25, _DEVICE_HEIGHT),
	_22: RFValue(22, _DEVICE_HEIGHT),
	_21: RFValue(21, _DEVICE_HEIGHT),
	_20: RFValue(20, _DEVICE_HEIGHT),
	_19_3: RFValue(19.3, _DEVICE_HEIGHT),
	_19: RFValue(19, _DEVICE_HEIGHT),
	_18_7: RFValue(18.7, _DEVICE_HEIGHT),
	_18_3: RFValue(18.3, _DEVICE_HEIGHT),
	_18_2: RFValue(18.2, _DEVICE_HEIGHT),
	_18: RFValue(18, _DEVICE_HEIGHT),
	_17_5: RFValue(17.5, _DEVICE_HEIGHT),
	_17: RFValue(17, _DEVICE_HEIGHT),
	_16_5: RFValue(16.5, _DEVICE_HEIGHT),
	_16_2: RFValue(16.2, _DEVICE_HEIGHT),
	_16: RFValue(16, _DEVICE_HEIGHT),
	_15_7: RFValue(15.7, _DEVICE_HEIGHT),
	_15_6: RFValue(15.6, _DEVICE_HEIGHT),
	_15_3: RFValue(15.3, _DEVICE_HEIGHT),
	_15: RFValue(15, _DEVICE_HEIGHT),
	_14_7: RFValue(14.7, _DEVICE_HEIGHT),
	_14_3: RFValue(14.3, _DEVICE_HEIGHT),
	_14: RFValue(14, _DEVICE_HEIGHT),
	_13: RFValue(13, _DEVICE_HEIGHT),
	_12_9: RFValue(12.9, _DEVICE_HEIGHT),
	_12: RFValue(12, _DEVICE_HEIGHT),
	_11: RFValue(11, _DEVICE_HEIGHT),
	_10_5: RFValue(10.5, _DEVICE_HEIGHT),
	_10: RFValue(10, _DEVICE_HEIGHT),
};

// font family used in the application
export const FONT_FAMILY = {
	BOLD: "AvenirNext-Bold",
	BOLD_ITALIC: "AvenirNext-BoldItalic",
	DEMI_BOLD: "AvenirNext-DemiBold",
	DEMI_BOLD_ITALIC: "AvenirNext-DemiBoldItalic",
	HEAVY: "AvenirNext-Heavy",
	HEAVY_ITALIC: "AvenirNext-HeavyItalic",
	ITALIC: "AvenirNext-Italic",
	MEDIUM: "AvenirNext-Medium",
	MEDIUM_ITALIC: "AvenirNext-MediumItalic",
	REGULAR: "AvenirNext-Regular",
	ULTRA_LIGHT: "AvenirNext-UltraLight",
	ULTRA_LIGHT_ITALIC: "AvenirNext-UltraLightItalic",
};

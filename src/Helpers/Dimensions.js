import { Dimensions, StatusBar } from "react-native";

export const _STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const _DEVICE_WIDTH = Dimensions.get("window").width;
export const _DEVICE_HEIGHT = Dimensions.get("window").height;

// Height and width of mobile present in zeplin design. Dimensions are calculated based on these values
const _iPHONE_8_WIDTH = 360;
const _iPHONE_8_HEIGHT = 732;

/** MARGIN CONSTANTS */
export const MARGIN = {
	_2: (_DEVICE_WIDTH * 2) / _iPHONE_8_WIDTH,
	_5: (_DEVICE_WIDTH * 5) / _iPHONE_8_WIDTH,
	_6: (_DEVICE_WIDTH * 6) / _iPHONE_8_WIDTH,
	_8: (_DEVICE_WIDTH * 8) / _iPHONE_8_WIDTH,
	_10: (_DEVICE_WIDTH * 10) / _iPHONE_8_WIDTH,
	_15: (_DEVICE_WIDTH * 15) / _iPHONE_8_WIDTH,
	_20: (_DEVICE_WIDTH * 20) / _iPHONE_8_WIDTH,
	_30: (_DEVICE_WIDTH * 30) / _iPHONE_8_WIDTH,
	_40: (_DEVICE_WIDTH * 40) / _iPHONE_8_WIDTH,
};

/** PADDING CONSTANTS */
export const PADDING = {
	_2: (_DEVICE_WIDTH * 2) / _iPHONE_8_WIDTH,
	_5: (_DEVICE_WIDTH * 5) / _iPHONE_8_WIDTH,
	_10: (_DEVICE_WIDTH * 10) / _iPHONE_8_WIDTH,
	_15: (_DEVICE_WIDTH * 15) / _iPHONE_8_WIDTH,
	_30: (_DEVICE_WIDTH * 30) / _iPHONE_8_WIDTH,
};

/** WIDTH CONSTANTS */
export const HORIZONTAL_DIMENSIONS = {
	_10: (_DEVICE_WIDTH * 10) / _iPHONE_8_WIDTH,
	_16: (_DEVICE_WIDTH * 16) / _iPHONE_8_WIDTH,
	_40: (_DEVICE_WIDTH * 40) / _iPHONE_8_WIDTH,
	_50: (_DEVICE_WIDTH * 50) / _iPHONE_8_WIDTH,
	_70: (_DEVICE_WIDTH * 70) / _iPHONE_8_WIDTH,
	_100: (_DEVICE_WIDTH * 100) / _iPHONE_8_WIDTH,
	_150: (_DEVICE_WIDTH * 150) / _iPHONE_8_WIDTH,
};

/** HEIGHT CONSTANTS */
export const VERTICAL_DIMENSIONS = {
	_20: (_DEVICE_HEIGHT * 20) / _iPHONE_8_HEIGHT,
	_32: (_DEVICE_HEIGHT * 32) / _iPHONE_8_HEIGHT,
	_40: (_DEVICE_HEIGHT * 40) / _iPHONE_8_HEIGHT,
	_50: (_DEVICE_HEIGHT * 50) / _iPHONE_8_HEIGHT,
	_100: (_DEVICE_HEIGHT * 100) / _iPHONE_8_HEIGHT,
	_150: (_DEVICE_HEIGHT * 150) / _iPHONE_8_HEIGHT,
	_200: (_DEVICE_HEIGHT * 200) / _iPHONE_8_HEIGHT,
};

/** BORDER RADIUS CONSTANTS */
export const BORDER_RADIUS = {
	_5: HORIZONTAL_DIMENSIONS._10 / 2,
	_8: HORIZONTAL_DIMENSIONS._16 / 2,
	_20: HORIZONTAL_DIMENSIONS._40 / 2,
	_25: HORIZONTAL_DIMENSIONS._50 / 2,
};

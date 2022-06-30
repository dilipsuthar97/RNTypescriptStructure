import { Dimensions, PixelRatio } from 'react-native';
import { s, ms, vs, mvs } from 'react-native-size-matters';

let SCREEN_HEIGHT = Dimensions.get('window').height;
let SCREEN_WIDTH = Dimensions.get('window').width;
let FONT_SCALE = Dimensions.get('window').fontScale;

const windowHeight = (height: number) => {
  var size = SCREEN_HEIGHT > 720 ? 720 : 667;
  let tempHeight = (SCREEN_HEIGHT * height) / 667;
  return PixelRatio.roundToNearestPixel(tempHeight);
};

const windowWidth = (width: number) => {
  let tempWidth = (SCREEN_WIDTH * width) / 375;
  return PixelRatio.roundToNearestPixel(tempWidth);
};

export const fontSizes = {
  FONT8: ms(8, 0.15),
  FONT10: ms(10, 0.15),
  FONT11: ms(11, 0.15),
  FONT12: ms(12, 0.15),
  FONT13: ms(13, 0.15),
  FONT14: ms(14, 0.15),
  FONT15: ms(15, 0.15),
  FONT16: ms(16, 0.15),
  FONT17: ms(17, 0.15),
  FONT18: ms(18, 0.15),
  FONT19: ms(19, 0.15),
  FONT20: ms(20, 0.15),
  FONT22: ms(22, 0.15),
  FONT24: ms(24, 0.15),
  FONT26: ms(26, 0.15),
  FONT28: ms(28, 0.15),
  FONT30: ms(30, 0.15),
  FONT32: ms(32, 0.15),
  FONT34: ms(34, 0.15),
  FONT36: ms(36, 0.15),
  FONT42: ms(42, 0.15),
  FONT50: ms(50, 0.15),
};

export const scale = {
  s,
  ms: (size: number, factor: number | undefined = 0.1) => ms(size, factor),
  vs,
  mvs: (size: number, factor: number | undefined = 0.1) => mvs(size, factor),
  windowHeight,
  windowWidth,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  FONT_SCALE,
};

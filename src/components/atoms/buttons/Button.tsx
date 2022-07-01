import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { colors, fontSizes, scale } from '_theme';

export interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewProps>;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.5}>
      {isLoading && <ActivityIndicator size={'small'} color={colors.white} />}
      {!isLoading && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    height: scale.mvs(45),
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.FONT16,
  },
});

import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProps } from '_interface/NavigationScreen.interface';

export interface LoginPageProps extends NavigationScreenProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginPage</Text>
    </View>
  );
};
export default LoginPage;

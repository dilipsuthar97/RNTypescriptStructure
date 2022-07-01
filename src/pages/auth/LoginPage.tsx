import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '_interface/Navigation.interface';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginPage</Text>
    </View>
  );
};
export default LoginPage;

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '_interface/Navigation.interface';
import { useSelector } from 'react-redux';
import { commonSelector } from '_redux/slices/CommonSlice';
import Button from '_components/atoms/buttons/Button';

type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'LoginPage'>;

const LoginPage: React.FC<LoginPageProps> = props => {
  const { connection, appState } = useSelector(commonSelector);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button text='Go Back' onPress={() => props.navigation.goBack()} />
    </View>
  );
};
export default LoginPage;

import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Button from '_components/atoms/buttons/Button';
import { RootStackParamList } from '_interface/Navigation.interface';

type SplashPageProps = NativeStackScreenProps<RootStackParamList, 'SplashPage'>;

const SplashPage: React.FC<SplashPageProps> = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        text='Go to login page'
        onPress={() => props.navigation.navigate('LoginPage')}
      />
    </View>
  );
};
export default SplashPage;

import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '_interface/Navigation.interface';

type SplashPageProps = NativeStackScreenProps<RootStackParamList, 'SplashPage'>;

const SplashPage: React.FC<SplashPageProps> = props => {
  useEffect(() => {
    props.navigation.navigate('LoginPage');
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SplashPage</Text>
    </View>
  );
};
export default SplashPage;

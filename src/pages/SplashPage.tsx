import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationHelper } from '_helpers';
import { NavigationScreenProps } from '_interface/NavigationScreen.interface';

export interface SplashPageProps extends NavigationScreenProps {}

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

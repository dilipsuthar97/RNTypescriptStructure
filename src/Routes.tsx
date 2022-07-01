import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { _navigationRef } from '_helpers/NavigationHelper';
import { RootStackParamList } from '_interface/Navigation.interface';

// Screens
import SplashPage from '_pages/SplashPage';
import LoginPage from '_pages/auth/LoginPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={_navigationRef}>
        <Stack.Navigator initialRouteName='SplashPage'>
          <Stack.Screen name='SplashPage' component={SplashPage} />
          <Stack.Screen name='LoginPage' component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default Routes;

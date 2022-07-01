import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';

import { _navigationRef } from '_helpers/NavigationHelper';
import { RootStackParamList } from '_interface/Navigation.interface';
import { setNetworkState } from '_redux/slices';

// Screens
import SplashPage from '_pages/SplashPage';
import LoginPage from '_pages/auth/LoginPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    /**
     * Event listener to handle network state change
     */
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setNetworkState(state));
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

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

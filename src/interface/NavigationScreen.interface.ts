import { NavigationProp, RouteProp } from '@react-navigation/native';

export interface NavigationScreenProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}

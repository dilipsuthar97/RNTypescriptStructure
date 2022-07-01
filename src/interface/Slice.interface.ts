import { NetInfoState } from '@react-native-community/netinfo';

export interface CommonSliceState {
  connection?: NetInfoState;
  deviceToken: string;
  error: Error | null;
  errorMsg: string;
  appState: {
    prev: string;
    current: string;
  };
}

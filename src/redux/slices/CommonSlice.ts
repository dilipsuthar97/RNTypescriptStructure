import { NetInfoState } from '@react-native-community/netinfo';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '_redux/store';

export interface AppState {
  prev: string;
  current: string;
}

export interface CommonSliceState {
  connection?: NetInfoState;
  deviceToken: string;
  error: Error | null;
  errorMsg: string;
  appState: AppState;
}

// Initial state
const initialState: CommonSliceState = {
  deviceToken: '',
  error: null,
  errorMsg: '',
  appState: {
    prev: '',
    current: '',
  },
};

// slice
const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setNetworkState(state, action: PayloadAction<NetInfoState>) {
      // ✅ CORRECT: logs a plain JS copy of the current data
      // console.log(current(state));
      state.connection = action.payload;
    },
    setDeviceToken(state, action: PayloadAction<string>) {
      state.deviceToken = action.payload;
    },
    setAppState(state, action: PayloadAction<string>) {
      const newAppState = action.payload;
      state.appState.prev = state.appState.current;
      state.appState.current = newAppState;
    },
  },
});

export const { setNetworkState, setDeviceToken, setAppState } =
  commonSlice.actions;
export const commonSelector = (state: RootState) => state.common;
export default commonSlice.reducer;

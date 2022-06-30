import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const useIsAppForeground = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const onChange = (state: AppStateStatus) => {
      setIsForeground(state === 'active');
    };
    const listener = AppState.addEventListener('change', onChange);
    return () => {
      listener.remove();
    };
  }, [setIsForeground]);

  return isForeground;
};

export default useIsAppForeground;

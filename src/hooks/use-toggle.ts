import { useCallback, useState } from 'react';

type UseToggleOutput = [boolean, (forcedState?: boolean) => void];

const useToggle = (defaultValue = false): UseToggleOutput => {
  const [state, setState] = useState(defaultValue);

  const toggleState = useCallback((forcedState?: boolean) => {
    setState((currentValue) =>
      typeof forcedState === 'boolean' ? forcedState : !currentValue
    );
  }, []);

  return [state, toggleState];
};

export default useToggle;

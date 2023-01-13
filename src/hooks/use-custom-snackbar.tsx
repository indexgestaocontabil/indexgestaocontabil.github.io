import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
import { MdClose } from 'react-icons/md';

const useCustomSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const trigger = useCallback(
    (message: string) => {
      const key = enqueueSnackbar(
        <>
          <span className="custom-snackbar-message">{message}</span>

          <button
            className="custom-snackbar-close"
            onClick={() => closeSnackbar(key)}
          >
            <MdClose size="24px" className="custom-snackbar-close-icon" />
          </button>
        </>
      );
    },
    [enqueueSnackbar, closeSnackbar]
  );

  return trigger;
};

export default useCustomSnackbar;

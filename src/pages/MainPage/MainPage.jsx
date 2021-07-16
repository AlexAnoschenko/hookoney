import { useEffect } from "react";
import UpdateUserInfo from "../../components/UpdateUserInfo/UpdateUserInfo";

const MainPage = ({ state, setState, snackState, setSnackState }) => {
  useEffect(() => {
    !state.currentUser.displayName &&
      setState({ ...state, isUpdateInfo: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <div className="mb-4">
          <span className="text-white text-xl mb-2">{`Hello, ${
            !state.currentUser.displayName
              ? state.currentUser.email
              : state.currentUser.displayName
          }`}</span>
          <span className="text-3xl color-change">!</span>
        </div>

        {state.isUpdateInfo && (
          <UpdateUserInfo
            state={state}
            setState={setState}
            snackState={snackState}
            setSnackState={setSnackState}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;

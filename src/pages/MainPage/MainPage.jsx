import { useState, useEffect } from "react";
import UpdateUserInfo from "../../components/UpdateUserInfo/UpdateUserInfo";

const MainPage = ({ state, setState, snackState, setSnackState }) => {
  const [isUpdateInfo, setIsUpdateInfo] = useState(false);

  useEffect(() => {
    !state.currentUser.displayName && setIsUpdateInfo(true);

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

        {isUpdateInfo && (
          <UpdateUserInfo
            state={state}
            setState={setState}
            snackState={snackState}
            setSnackState={setSnackState}
            setIsUpdateInfo={setIsUpdateInfo}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;

import UpdateUserInfo from "../../components/UpdateUserInfo/UpdateUserInfo";

const MainPage = ({ state, setState, snackState, setSnackState }) => {
  return (
    <div className="flex flex-col">
      <div>
        <div className="mb-4">
          <span className="text-white text-2xl mb-2">{`Hello, ${
            !state.currentUser.displayName
              ? state.currentUser.email
              : state.currentUser.displayName
          }`}</span>
          <span className="text-3xl color-change">!</span>
        </div>

        <UpdateUserInfo
          state={state}
          setState={setState}
          snackState={snackState}
          setSnackState={setSnackState}
        />
      </div>
    </div>
  );
};

export default MainPage;

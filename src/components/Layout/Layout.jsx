import { useHistory } from "react-router-dom";
import firebase from "firebase";
import SettingsSVG from "../../assets/svg/Settings/SettingsSVG";

const Layout = ({ children, state, setState }) => {
  let history = useHistory();

  const logOutUser = () => {
    firebase.auth().signOut();
    setState({ ...state, currentUser: null });
    history.push("/authorization");
  };

  const openUpdateUserInfo = () => {
    setState({ ...state, isUpdateInfo: true });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-defaultBg text-white">
      <div className="absolute top-2 left-4 text-center text-md mb-4 text-yellow-600">
        (Demo)
      </div>

      {state?.currentUser && (
        <>
          <div
            className="absolute top-2 right-28 w-7 cursor-pointer"
            onClick={openUpdateUserInfo}
          >
            <SettingsSVG />
          </div>

          <button
            className="absolute top-2 right-4 w-20 bg-yellow-700 py-1 text-sm text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            onClick={logOutUser}
          >
            Log out
          </button>
        </>
      )}

      {children}
    </div>
  );
};

export default Layout;

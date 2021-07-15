import { useHistory } from "react-router-dom";
import firebase from "firebase";

const MainPage = ({ state, setState }) => {
  let history = useHistory();

  const logOutUser = () => {
    firebase.auth().signOut();
    setState({ ...state, currentUser: null });
    history.push("/authorization");
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="text-white mb-2">{`Hello, ${state.currentUser.email}!`}</div>
        <button
          className="text-white rounded border border-white w-full"
          onClick={logOutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainPage;

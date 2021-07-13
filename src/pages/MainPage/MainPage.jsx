import firebase from "firebase";

const MainPage = () => {
  const logOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="flex flex-col">
      <div className="text-white mb-4">Hookoney!</div>

      <div>
        <div className="text-white">{`Hello!`}</div>
        <button
          className="text-white rounded border border-white"
          onClick={logOutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MainPage;

import { useEffect, useState } from "react";
import firebase from "firebase";
import "./App.css";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    // hasAccount: false,
    name: "",
    currentUser: null,
  });

  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const createAccount = () => {
    const { email, password } = state;
    // firebase.auth().createUserWithEmailAndPassword(email, password);

    firebase.auth().signInWithEmailAndPassword(email, password);
    // .then((response) => {
    //   setState({ ...state, hasAccount: true });
    //   console.log(response);
    // });
  };

  const db = firebase.database();

  db.ref("name").on("value", (snapshot) => {
    snapshot.val();
  });

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged((user) => setState({ ...state, currentUser: user }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state.currentUser);

  return (
    <div className="App bg-black">
      <div className="text-white mb-4">Hookoney!</div>
      {state.currentUser ? (
        <div className="text-white">{`Hello, ...!`}</div>
      ) : (
        <div className="flex flex-col">
          <input
            id="email"
            type="text"
            className="mb-2 rounded"
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            className="mb-2 rounded"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="text-white rounded border border-white"
            onClick={createAccount}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

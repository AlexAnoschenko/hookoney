import { useState, useEffect } from "react";
import firebase from "firebase";
import "./App.css";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    hasAccount: false,
    name: "",
  });

  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const createAccount = () => {
    const { email, password } = state;
    // firebase.auth().createUserWithEmailAndPassword(email, password);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setState({ ...state, hasAccount: true });
      });
  };

  useEffect(() => {
    // const db = firebase.database();

    var starCountRef = firebase.database().ref("name");

    console.log(starCountRef);

    starCountRef.on("value", (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });

    // const name = db.ref("name");
    // name.on("value", (elem) => {
    //   setState({ ...state, name: elem.val() });
    // });

    // console.log(state);
  });

  return (
    <div className="App bg-black">
      <div className="text-white mb-4">Hookoney!</div>
      {state.hasAccount ? (
        <div className="text-white">{`Hello, ${state.name}!`}</div>
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

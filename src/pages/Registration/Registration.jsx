import firebase from "firebase";

const Registration = ({ state, setState }) => {
  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const createAccount = () => {
    const { email, password } = state;
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  return (
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
        Sign Up
      </button>
    </div>
  );
};

export default Registration;

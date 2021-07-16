import { useHistory } from "react-router-dom";
import firebase from "firebase";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";
import { ERRORS } from "../../utils/constants";
import "./styles.css";

const Authorization = ({ state, setState, snackState, setSnackState }) => {
  let history = useHistory();

  const { email, password } = state;

  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const createAccount = () => {
    setState({ ...state, isLoading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().signInWithEmailAndPassword(email, password);
        setState({ ...state, isLoading: false });
        setSnackState({
          ...snackState,
          openSnack: true,
          type: "success",
          text: "You are successfully logged in!",
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err.code);
        setState({ ...state, isLoading: false });
        setSnackState({
          ...snackState,
          openSnack: true,
          type: "error",
          text: ERRORS[err.code],
        });
      });
  };

  const signUpUser = () => {
    setState({ ...state, isLoading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...state, isLoading: false });
        setSnackState({
          ...snackState,
          openSnack: true,
          type: "success",
          text: "You are successfully logged in!",
        });
        history.push("/");
      })
      .catch((err) => {
        setState({ ...state, isLoading: false });
        setSnackState({
          ...snackState,
          openSnack: true,
          type: "error",
          text: ERRORS[err.code],
        });
      });
  };

  if (state.isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="mb-4 text-center text-2xl">
        <span>hookoney</span>
        <span className="text-3xl color-change">!</span>
      </div>

      <input
        id="email"
        type="text"
        className="mb-2 rounded w-60 h-9 pl-2 rounded-lg text-black font-semibold"
        onChange={handleChange}
      />

      <input
        id="password"
        type="password"
        className="mb-4 rounded w-60 h-9 pl-2 rounded-lg text-black font-semibold"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="py-2 px-4 mb-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={signUpUser}
      >
        Sign In
      </button>

      <button
        type="submit"
        className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={createAccount}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Authorization;

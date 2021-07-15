import { useHistory } from "react-router-dom";
import firebase from "firebase";
import Layout from "../../Layout/Layout";
import Loader from "../../components/Loader/Loader";
import "./styles.css";

const Authorization = ({ state, setState }) => {
  let history = useHistory();

  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const signUpUser = () => {
    const { email, password } = state;
    setState({ ...state, isLoading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...state, isLoading: false });
        history.push("/");
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
        class="py-2 px-4 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={signUpUser}
      >
        Sign In
      </button>
    </div>
  );
};

export default Authorization;

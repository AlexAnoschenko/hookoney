import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import Layout from "./Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import Authorization from "./pages/Authorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Loader from "./components/Loader/Loader";

import {
  ROUTE_MAIN_PAGE,
  ROUTE_AUTHORIZATION,
  ROUTE_REGISTRATION,
} from "./routes.ts";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    currentUser: null,
    isLoading: true,
  });

  const db = firebase.database();

  db.ref("name").on("value", (snapshot) => {
    snapshot.val();
  });

  const handleChange = ({ target: { value, id } }) => {
    setState({ ...state, [id]: value });
  };

  const createAccount = () => {
    const { email, password } = state;
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const signUpUser = () => {
    const { email, password } = state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (!state.currentUser) {
      firebase
        .auth()
        .onAuthStateChanged((user) =>
          setState({ ...state, currentUser: user, isLoading: false })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state.isLoading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE_MAIN_PAGE} exact>
          <Layout>
            <Route exact component={MainPage} />
          </Layout>
        </Route>

        <Route path={ROUTE_AUTHORIZATION} exact>
          <Layout>
            <Route exact component={Authorization} />
          </Layout>
        </Route>

        <Route path={ROUTE_REGISTRATION} exact>
          <Layout>
            <Route exact component={Registration} />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

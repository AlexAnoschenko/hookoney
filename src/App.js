import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
    currentUser: null,
    isLoading: true,
  });

  const db = firebase.database();

  db.ref("name").on("value", (snapshot) => {
    snapshot.val();
  });

  useEffect(() => {
    if (!state.currentUser) {
      firebase.auth().onAuthStateChanged((user) =>
        setState({
          ...state,
          currentUser: user,
          isLoading: false,
        })
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
      <Layout state={state} setState={setState}>
        <Switch>
          {state.currentUser && (
            <Route path={ROUTE_MAIN_PAGE} exact>
              <MainPage state={state} setState={setState} />
            </Route>
          )}

          {!state.currentUser && (
            <Route path={ROUTE_AUTHORIZATION} exact>
              <Authorization state={state} setState={setState} />
            </Route>
          )}

          <Route path={ROUTE_REGISTRATION} exact>
            <Registration state={state} setState={setState} />
          </Route>

          <Redirect
            push
            to={`${state.currentUser ? "/" : ROUTE_AUTHORIZATION}`}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

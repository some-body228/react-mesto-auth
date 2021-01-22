import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./main/Main";
import ProtectedRoute from "./ProtectRoute";
import Login from "./login/Login";
import Register from "./register/Register";
import InfoTooltip from "./InfoTooltip";
import Api from "../utils/Api";
function App(props) {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [infoPopup, setInfoPopup] = React.useState({
    openPopup: false,
    failed: true,
  });
  const [email, setEmail] = React.useState("");
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    Api.authApi
      .checkToken(jwt)
      .then((res) => {
        setLoggedIn(true);
        setEmail(res.data.email);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function onRegistor(data) {
    Api.authApi
      .register(data)
      .then((res) => {
        setInfoPopup({
          openPopup: true,
          failed: false,
        });
        history.push("/sign-in");
      })
      .catch((err) => {
        setInfoPopup({
          openPopup: true,
          failed: true,
        });
        console.log(err.message);
      });
  }
  function onLogin(data) {
    Api.authApi
      .login(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        setEmail(res.email);
        history.push("/");
      })
      .catch((err) => {
        setInfoPopup({
          openPopup: true,
          failed: true,
        });
        console.log(err.message);
      });
  }
  function logOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
  }
  function closePopup() {
    setInfoPopup({
      openPopup: false,
      failed: infoPopup.failed,
    });
  }
  return (
    <>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Main}
          Header={Header}
          loggedIn={loggedIn}
          email={email}
          onLogOut={logOut}
        />
        <Route exact path="/sign-in">
          <Header
            renderedElement={
              <a className="header__caption" href="/sign-up">
                Регистрация
              </a>
            }
          />
          <Login onLogin={onLogin} />
          <InfoTooltip
            isOpen={infoPopup.openPopup}
            failed={infoPopup.failed}
            onClose={closePopup}
          />
        </Route>
        <Route exact path="/sign-up">
          <Header
            renderedElement={
              <a className="header__caption" href="/sign-in">
                Войти
              </a>
            }
          />
          <Register onRegistor={onRegistor} />
          <InfoTooltip
            isOpen={infoPopup.openPopup}
            failed={infoPopup.failed}
            onClose={closePopup}
          />
        </Route>
      </Switch>
    </>
  );
}
export default App;

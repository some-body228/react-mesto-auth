import React from "react";
function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function onSubmit(evt) {
    evt.preventDefault();
    console.log({ email, password });
    props.onLogin({ email, password });
  }
  return (
    <section className="sing">
      <h1 className="sing__title">Вход</h1>
      <form className="sing__form" onSubmit={onSubmit}>
        <input
          className="sing__input"
          type="email"
          required
          placeholder="Email"
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        ></input>
        <input
          className="sing__input"
          type="password"
          required
          minLength="8"
          maxLength="30"
          placeholder="Пароль"
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        ></input>
        <button className="sing__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}
export default Login;

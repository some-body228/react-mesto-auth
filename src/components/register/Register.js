import React from "react";
function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function onSubmit(evt) {
    evt.preventDefault();
    props.onRegistor({ email, password });
  }
  return (
    <section className="sing">
      <h1 className="sing__title">Регистрация</h1>
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
          Зарегистрироваться
        </button>
        <a className="sing__caption" href="/sign-in">
          Уже зарегистрированы? Войти
        </a>
      </form>
    </section>
  );
}
export default Register;

import React, { useState } from "react";
import { FormComponent } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Form = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormComponent
      className="container"
      onSubmit={(event) => login(event, email, password)}
    >
      <div className="title">
        <p className="fs-1 fw-bold">Entrar</p>
        <br />
        <p className="fs-5 fw-bold">BEM VINDO DE VOLTA!</p>
      </div>
      <div className="container-inputs">
        <label htmlFor="email" className="fw-bold">
          E-Mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Digite seu e-mail"
        />
      </div>
      <div className="container-inputs">
        <label htmlFor="password" className="fw-bold">
          Senha:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Digite sua senha"
        />
      </div>
      <div className="container-button-submit">
        <button>Entrar</button>
        <Link to={"/register"}>Não tenho uma conta.</Link>
      </div>
    </FormComponent>
  );
};

export default Form;

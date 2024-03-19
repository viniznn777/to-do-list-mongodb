import React, { useState } from "react";
import { FormComponent } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Form = () => {
  const { register } = useAuth();

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <FormComponent
      className="container"
      onSubmit={(event) =>
        register(
          event,
          setFname,
          setEmail,
          setPassword,
          setPassword2,
          fname,
          email,
          password,
          password2
        )
      }
    >
      <div className="title">
        <p className="fs-1 fw-bold">Criar conta</p>
        <br />
        <p className="fs-5 fw-bold">REGISTRE-SE AGORA PARA COMEÇAR!</p>
      </div>
      <div className="container-inputs">
        <label htmlFor="fname" className="fw-bold">
          Primeiro Nome:
        </label>
        <input
          type="text"
          name="fname"
          id="fname"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
        />
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
        />
      </div>
      <div className="container-inputs">
        <label htmlFor="password2" className="fw-bold">
          Confirme sua senha:
        </label>
        <input
          type="password"
          name="password2"
          id="password2"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
      </div>
      <div className="container-button-submit">
        <button>Registrar</button>
        <Link to={"/login"}>Já tenho uma conta.</Link>
      </div>
    </FormComponent>
  );
};

export default Form;

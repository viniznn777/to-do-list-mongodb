import React, { useState } from "react";
import { Container } from "./styles";
import BackButton from "../../../../../components/BackButton";
import { deleteAccount } from "./DeleteAccountFunction";
import { useAuth } from "../../../../../hooks/useAuth";

const Form = () => {
  const [password, setPassword] = useState("");

  const { logout } = useAuth();

  return (
    <Container
      className="container"
      onSubmit={(event) => deleteAccount(event, password, logout)}
    >
      <div className="title">
        <p className="fs-1 fw-bold">Excluir Conta</p>
        <br />
        <p className="fs-5 fw-bold text-danger">
          ESTA AÇÃO EXCLUIRÁ SUA CONTA PERMANENTEMENTE!
        </p>
      </div>
      <div className="container-inputs">
        <label htmlFor="password" className="fw-bold">
          Confirmar Senha:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Confirme sua senha"
        />
      </div>
      <div className="container-button-submit">
        <button className="btn btn-outline-danger">Excluir</button>
        <BackButton where={"/profile"} />
      </div>
    </Container>
  );
};

export default Form;

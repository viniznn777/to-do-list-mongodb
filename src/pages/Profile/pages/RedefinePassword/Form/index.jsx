import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import BackButton from "../../../../../components/BackButton";
import { changePassword } from "./ChangePasswordFunction";

const Form = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const inputRef = useRef(null);

  const newPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const newPasswordChange2 = (event) => {
    setNewPassword2(event.target.value);
  };

  useEffect(() => {
    if (passwordError) {
      inputRef.current.focus();
    }
  }, [passwordError]);

  return (
    <Container
      className="container"
      onSubmit={(event) =>
        changePassword(
          event,
          oldPassword,
          newPassword,
          newPassword2,
          setOldPassword,
          setNewPassword,
          setNewPassword2,
          setPasswordError
        )
      }
    >
      <div className="title">
        <p className="fs-1 fw-bold">Redefinir Senha</p>
        <br />
      </div>
      <div className="container-inputs">
        <label htmlFor="oldpassword" className="fw-bold">
          Senha Atual:
        </label>
        <input
          type="password"
          name="oldpassword"
          id="oldpassword"
          onChange={(e) => setOldPassword(e.target.value)}
          value={oldPassword}
          placeholder="Digite sua senha atual"
        />
      </div>
      <div className="container-inputs">
        <label htmlFor="newPassword" className="fw-bold">
          Nova Senha:
        </label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          onChange={newPasswordChange}
          value={newPassword}
          placeholder="Digite sua nova senha"
          className={passwordError ? "error" : ""}
          ref={inputRef}
        />
      </div>
      <div className="container-inputs">
        <label htmlFor="newPassword2" className="fw-bold">
          Confirmar Senha:
        </label>
        <input
          type="password"
          name="newPassword2"
          id="newPassword2"
          onChange={newPasswordChange2}
          value={newPassword2}
          placeholder="Confirme sua senha"
          className={passwordError ? "error" : ""}
        />
      </div>
      <div className="container-button-submit">
        <button>Alterar</button>
        <BackButton where={"/profile"} />
      </div>
    </Container>
  );
};

export default Form;

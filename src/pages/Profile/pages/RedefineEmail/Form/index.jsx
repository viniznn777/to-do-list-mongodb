import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import BackButton from "../../../../../components/BackButton";
import { fetchEmail } from "../../../LoadInfoFunction";
import { errorMessage } from "../../../../../utils/toastifyMessages";
import { changeEmail } from "./ChangeEmailFunction";

const Form = () => {
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchEmail();
        setEmail(data.data);
      } catch (err) {
        console.log(err);
        errorMessage(
          "Não conseguimos carregar suas informações. Atualize a página e tente novamente!"
        );
      }
    })();
  }, [email]);

  return (
    <Container
      className="container"
      onSubmit={(event) => changeEmail(event, newEmail, setNewEmail, setEmail)}
    >
      <div className="title">
        <p className="fs-1 fw-bold">Alterar E-mail</p>
        <br />
      </div>
      <div className="container-inputs">
        <label htmlFor="email" className="fw-bold">
          E-Mail Atual:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled
          className="fw-bold"
        />
      </div>
      <div className="container-inputs">
        <label htmlFor="newEmail" className="fw-bold">
          Novo E-mail:
        </label>
        <input
          type="email"
          name="newEmail"
          id="newEmail"
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          placeholder="Digite seu novo e-mail"
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

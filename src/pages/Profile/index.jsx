import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { fetchEmail } from "./LoadInfoFunction";
import { errorMessage } from "../../utils/toastifyMessages";
import BackButton from "../../components/BackButton";

const Profile = () => {
  const { fname } = useAuth();
  const [email, setEmail] = useState("usuario@example.com");

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
  }, []);

  return (
    <Container className="container">
      <div className="container-info-user">
        <img
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${fname}&radius=50&size=200`}
          alt={`Imagem de perfil de ${fname}`}
          className="img-fluid"
          draggable={false}
        />
        <div className="container-username-email-button">
          <div className="username-and-email">
            <p className="fs-3 fw-bold text-center text-info mt-3">{fname}</p>
            <p className="fs-5 fw-bold text-center email mt-3">{email}</p>
          </div>
          <div className="container-button-edit">
            <button className="btn btn-outline-primary">Editar Perfil</button>
          </div>
        </div>
      </div>
      <div className="profile-options">
        <p className="fs-2 fw-bold">Opções do Perfil</p>
        <div className="links">
          <Link to={"/profile/redefine_password"}>
            <button className="btn btn-primary mt-3">Redefinir Senha</button>
          </Link>
          <Link to={"/profile/change_email"}>
            <button className="btn btn-primary mt-3">Alterar Email</button>
          </Link>
          <Link to={"/profile/delete_acc"}>
            <button className="btn btn-outline-danger mt-3">
              Excluir Conta
            </button>
          </Link>
        </div>
      </div>
      <BackButton where={"/"} />
    </Container>
  );
};

export default Profile;

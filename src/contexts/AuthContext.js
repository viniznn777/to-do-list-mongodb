import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { AUTH_URL } from "../api/basesURL";
import { useNavigate } from "react-router-dom";
import {
  alertMessage,
  errorMessage,
  infoMessage,
  successMessage,
} from "../utils/toastifyMessages";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await AUTH_URL.get("/checkAuthStatus", {
          withCredentials: true,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
          console.clear();
        } else if (response.status === 401) {
          throw new Error("Você ainda não está Autenticado!");
        }
      } catch (err) {
        setIsAuthenticated(false);
        console.error("Erro ao verificar autenticação", err);
      }
    };

    checkAuthStatus();
  }, []);

  const register = async (
    event,
    setEmail,
    setPassword,
    setPassword2,
    email,
    password,
    password2
  ) => {
    event.preventDefault();

    try {
      if (!email || !password || !password2) {
        alertMessage("Todos os campos devem ser preenchidos!");
        return;
      } else if (password !== password2) {
        alertMessage("As senhas não correspondem!");
        return;
      }

      const body = {
        email,
        password,
      };

      const response = await AUTH_URL.post("/register", body, {
        withCredentials: true,
        credentials: "include",
      });

      if (response.status === 201) {
        setEmail("");
        setPassword("");
        setPassword2("");
        successMessage("Usuário criado com sucesso!");
        navigate("/login");
      } else if (response.status === 400) {
        errorMessage("Email indisponível!");
        return;
      }
    } catch (err) {
      errorMessage("Não foi possível criar usuário. Tente Novamente!");
      infoMessage(
        "Se o problema persistir, aguarde alguns instantes para criar novamente!",
        10000
      );
      console.log("Não foi possível criar usuário: ", err);
    }
  };

  const login = async (event, email, password) => {
    event.preventDefault();
    try {
      if (!email || !password) {
        alertMessage("Todos os campos devem ser preenchidos!");
        return;
      }

      const body = { email, password };

      const response = await AUTH_URL.post("/login", body, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/");
        successMessage("Sucesso ao entrar!");
        console.clear();
      } else if (response.status === 400) {
        errorMessage("Email ou senha incorretos!");
        return;
      }
    } catch (err) {
      errorMessage("Não foi possível fazer o login. Tente Novamente!");
      infoMessage(
        "Se o problema persistir, aguarde alguns instantes para fazer o login novamente!",
        10000
      );
      console.log("Não foi possível realizar o login: ", err);
    }
  };

  const logout = async () => {
    const cookiePath = "/";

    try {
      const response = await AUTH_URL.post("/logout", null, {
        withCredentials: true,
        credentials: "include",
      });
      if (response.status === 200) {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${cookiePath};`;
        document.cookie = `id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${cookiePath};`;

        setIsAuthenticated(false);
        navigate("/login");
        console.clear();
      } else {
        console.error(
          "Houve um erro ao realizar o logout",
          response.statusText
        );
      }
    } catch (err) {
      console.error("Erro durante o logout", err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

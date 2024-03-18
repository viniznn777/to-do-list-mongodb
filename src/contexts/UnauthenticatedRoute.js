import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function UnauthenticatedRoute({ item }) {
  const { isAuthenticated } = useAuth();

  // Verificação para que caso o usuário esteja autenticado, ele não consiga acessar a página de login ou registro da aplicação, levando ele direto para a página HOME
  return isAuthenticated ? <Navigate to="/" /> : item;
}

export { UnauthenticatedRoute };

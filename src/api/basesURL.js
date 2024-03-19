import axios from "axios";

export const AUTH_URL = axios.create({
  baseURL: "http://localhost:8081/api/auth",
  // Como default o axios só vem configurado para tratar status de maior que 200 e até 300
  // Então foi definido para tratamentos de status NESTA ROTA de até 404
  validateStatus: function (status) {
    return status >= 200 && status <= 404;
  },
});
export const MANAGE_TASK = axios.create({
  baseURL: "http://localhost:8081/manage",
  // Como default o axios só vem configurado para tratar status de maior que 200 e até 300
  // Então foi definido para tratamentos de status NESTA ROTA de até 404
  validateStatus: function (status) {
    return status >= 200 && status <= 404;
  },
});
export const MANAGE_USER = axios.create({
  baseURL: "http://localhost:8081/user/private_info",
  // Como default o axios só vem configurado para tratar status de maior que 200 e até 300
  // Então foi definido para tratamentos de status NESTA ROTA de até 404
  validateStatus: function (status) {
    return status >= 200 && status <= 404;
  },
});

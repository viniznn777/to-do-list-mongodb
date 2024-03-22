import { MANAGE_USER } from "../../../../../../api/basesURL";
import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../../../../../../utils/toastifyMessages";

export const deleteAccount = async (event, password, logoutFunction) => {
  event.preventDefault();

  try {
    if (!password.trim()) {
      return alertMessage("Preencha os campos vazios!");
    }

    const body = { password };

    const response = await MANAGE_USER.post("/delete_acc", body, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 400) {
      return errorMessage("Senha incorreta!");
    }

    successMessage("Conta deletada");
    setTimeout(() => {
      logoutFunction();
    }, 3000);
  } catch (err) {}
};

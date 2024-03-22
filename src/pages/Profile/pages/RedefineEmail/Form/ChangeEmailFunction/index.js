import { MANAGE_USER } from "../../../../../../api/basesURL";
import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../../../../../../utils/toastifyMessages";

export const changeEmail = async (
  event,
  newEmail,
  setNewEmail,
  setOldEmail
) => {
  event.preventDefault();
  try {
    if (!newEmail.trim()) {
      return alertMessage("Preecha os campos vazios!");
    }

    const body = { email: newEmail };

    const response = await MANAGE_USER.post("/change/email", body, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 409) {
      return alertMessage("Não é possível adicionar este e-mail!");
    }

    setNewEmail("");
    setOldEmail(newEmail);
    successMessage("E-mail alterado!");
  } catch (err) {
    console.log("Houve um erro interno ao alterar seu e-mail! ", err);
    errorMessage("Houve um erro interno ao alterar seu e-mail!");
  }
};

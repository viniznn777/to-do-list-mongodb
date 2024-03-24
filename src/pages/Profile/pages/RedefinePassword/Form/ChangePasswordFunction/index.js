import { MANAGE_USER } from "../../../../../../api/basesURL";
import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../../../../../../utils/toastifyMessages";

export const changePassword = async (
  event,
  oldPassword,
  newPassword,
  newPassword2,
  setOldPassword,
  setNewPassword,
  setNewPassword2,
  setPasswordError
) => {
  event.preventDefault();

  try {
    if (!oldPassword.trim() || !newPassword.trim() || !newPassword2.trim()) {
      return alertMessage("Preecha todos os campos!");
    }

    if (newPassword !== newPassword2) {
      setPasswordError(true);
      return alertMessage("As senhas não correspondem");
    }

    const body = {
      oldPassword,
      newPassword,
    };

    const response = await MANAGE_USER.post("/redefine_password", body, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 400) {
      return errorMessage("Senha atual incorreta!");
    }

    setOldPassword("");
    setNewPassword("");
    setNewPassword2("");
    setPasswordError(false);
    successMessage("Senha atualizada!");
  } catch (err) {
    console.log(err);
    errorMessage(
      "Houve um erro interno ao atualizar sua senha! Tente novamente mais tarde!"
    );
  }
};

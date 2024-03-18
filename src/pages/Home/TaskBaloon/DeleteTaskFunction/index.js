import { MANAGE_TASK } from "../../../../api/basesURL";
import {
  errorMessage,
  successMessage,
} from "../../../../utils/toastifyMessages";

export const deleteTask = async (id, onDelete) => {
  try {
    await MANAGE_TASK.delete(`/del/${id}`, {
      withCredentials: true,
      credentials: "include",
    });

    successMessage("Tarefa deletada!", 4000);

    onDelete(id);
  } catch (err) {
    errorMessage("Houve um erro ao deletar esta tarefa!");
    console.error("Erro ao deletar tarefa:", err);
  }
};

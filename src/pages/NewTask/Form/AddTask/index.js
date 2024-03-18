import { MANAGE_TASK } from "../../../../api/basesURL";
import {
  alertMessage,
  successMessage,
} from "../../../../utils/toastifyMessages";

export const addTask = async (event, setTitle, title, setTask, task) => {
  event.preventDefault();
  try {
    if (!title || !task) {
      alertMessage("Você não pode adicionar uma tarefa vazia!");
      return;
    }

    const body = {
      title,
      task,
    };

    const response = await MANAGE_TASK.post("/new_task", body, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 200) {
      setTitle("");
      setTask("");
      successMessage("Tarefa criada com sucesso!");
    }
  } catch (err) {
    console.error("Estamos com problemas para adicionar a sua tarefa! ", err);
  }
};

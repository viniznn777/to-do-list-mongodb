import { MANAGE_TASK } from "../../../../api/basesURL";
import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../../../../utils/toastifyMessages";

export const loadTask = async (id, setTitle, setTask) => {
  try {
    const response = await MANAGE_TASK.get(`/task/${id}`, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 400) {
      errorMessage("Houve um erro ao carregar sua tarefa!");
      return;
    }

    setTitle(response.data.title);
    setTask(response.data.task);
  } catch (err) {
    console.log(err);
  }
};

export const handleEditForm = async (
  event,
  textButton,
  setTextButton,
  setInputState,
  setTextTop,
  title,
  task,
  setTitle,
  setTask,
  id
) => {
  event.preventDefault();
  try {
    if (textButton === "Editar Tarefa") {
      setInputState(false);
      setTextTop("Editando Tarefa...");
      setTextButton("Salvar Tarefa");
      return;
    }

    if (!title.trim() || !task.trim()) {
      alertMessage("Você não pode enviar uma tarefa vazia!");
      return;
    }

    const body = { title, task };
    const response = await MANAGE_TASK.post(`/edit_task/${id}`, body, {
      withCredentials: true,
      credentials: "include",
    });

    if (response.status === 400) {
      errorMessage("Houve um erro ao editar sua tarefa!");
      return;
    }

    // Atualizando o estado diretamente
    setTitle(title);
    setTask(task);
    setTextButton("Editar Tarefa");
    setInputState(true);
    setTextTop("Detalhes da Tarefa");
    successMessage("Tarefa editada!");
  } catch (err) {
    console.log(err);
  }
};

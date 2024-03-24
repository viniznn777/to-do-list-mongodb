import React, { useEffect, useRef, useState } from "react";
import { FormContainer } from "./styles";
import { handleEditForm, loadTask } from "./LoadAndEditTask";
import BackButton from "../../../components/BackButton";

const Form = ({ id }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [textTop, setTextTop] = useState("Detalhes da Tarefa");
  const [textButton, setTextButton] = useState("Editar Tarefa");
  const [inputState, setInputState] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    loadTask(id, setTitle, setTask);
  }, [id]);

  useEffect(() => {
    if (!inputState) {
      inputRef.current.focus();
    }
  }, [inputState]);

  return (
    <FormContainer
      className="container"
      onSubmit={(event) =>
        handleEditForm(
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
        )
      }
    >
      <div className="title">
        <p className="fs-1 fw-bold">{textTop}</p>
      </div>

      <div className="container-inputs">
        <label htmlFor="title" className="fw-bold">
          Título:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          maxLength={36}
          disabled={inputState}
          ref={inputRef}
          className="fw-bold"
        />
      </div>

      <div className="container-inputs">
        <label htmlFor="task" className="fw-bold">
          Tarefa:
        </label>
        <textarea
          type="text"
          name="task"
          id="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          disabled={inputState}
          className="fw-bold"
        />
      </div>

      <div className="container-button-submit">
        <button>{textButton}</button>
        <BackButton where={"/"} />
      </div>
    </FormContainer>
  );
};

export default Form;

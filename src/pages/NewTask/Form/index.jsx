import React, { useState } from "react";
import { FormContainer } from "./styles";
import { Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { addTask } from "./AddTask";

const Form = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  return (
    <FormContainer
      className="container"
      onSubmit={(event) => addTask(event, setTitle, title, setTask, task)}
    >
      <div className="title">
        <p className="fs-1 fw-bold">Criar nova tarefa</p>
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
          className="fw-bold"
        />
      </div>

      <div className="container-button-submit">
        <button>Criar tarefa</button>
        <Link to={"/"}>
          <IoReturnDownBackSharp />
        </Link>
      </div>
    </FormContainer>
  );
};

export default Form;

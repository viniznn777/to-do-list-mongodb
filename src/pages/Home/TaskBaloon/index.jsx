import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { deleteTask } from "./DeleteTaskFunction";

const TaskBalloon = ({ title, date, id, onDelete }) => {
  return (
    <Container className="container">
      <div className="container-balloon">
        <Link to={`/see_details/${id}`}>
          <div className="task container">
            <p className="fs-4">{title}</p>
          </div>
        </Link>
        <div className="date">
          data: {date}
          <button
            className="btn btn-danger"
            onClick={() => deleteTask(id, onDelete)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TaskBalloon;

import React from "react";
import { Container } from "./styles";
import Form from "./Form";
import { useParams } from "react-router-dom";

const Task = () => {
  const { id } = useParams();

  return (
    <Container>
      <Form id={id} />
    </Container>
  );
};

export default Task;

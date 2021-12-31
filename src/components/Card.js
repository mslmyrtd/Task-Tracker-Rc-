import React from "react";
import { CardContainer, Container, Header } from "./CardStyled";
import { Form } from "./Form";
import Tasks from "./Tasks";

export const Card = () => {
  return (
    <Container>
      <CardContainer>
        <Header>
          <h1>Task Tracer</h1>
          <button>show Task Bar</button>
        </Header>
        <Form />
        <Tasks />
      </CardContainer>
    </Container>
  );
};

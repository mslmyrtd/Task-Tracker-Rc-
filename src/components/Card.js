import React, { useState } from "react";
import { CardContainer, Container, Header } from "./CardStyled";
import { Form } from "./Form";
import Tasks from "./Tasks";

export const Card = () => {
  const [butonName, setButonName] = useState("Close Add Task Bar");
  const input = () => {
    butonName == "Close Add Task Bar"
      ? setButonName("Show Add Task Bar")
      : setButonName("Close Add Task Bar");
  };
  return (
    <Container>
      <CardContainer>
        <Header>
          <h1>Task Tracker</h1>
          <button onClick={input}>{butonName}</button>
        </Header>
        {butonName == "Close Add Task Bar" ? <Form /> : null}
        <Tasks />
      </CardContainer>
    </Container>
  );
};

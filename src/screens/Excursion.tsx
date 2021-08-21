import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { excursionType, expenseType } from "../types/excursion";

export const Excursion = () => {
  const excursion = sampleExcursion;

  const calcExpenses = (id: string) =>
    excursion.expenses.reduce((acc, curr) => {
      const ppc = curr.price / curr.benefits.length;
      return acc + (curr.benefits.includes(id) ? ppc : 0);
    }, 0);

  const sumExpenses = (expenses: expenseType[]) =>
    expenses.reduce((accum, curr) => accum + curr.price, 0);

  return (
    <Container>
      <Header>{excursion.name}</Header>
      <Header>{sumExpenses(excursion.expenses)}</Header>
      <div className="body">
        {excursion.participants.map((p) => (
          <Participant>
            <div className="name">{p.name}</div>
            <div className="expenses">{calcExpenses(p.id)}</div>
          </Participant>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #131313;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 2em;
  margin: 30px 0;
  color: rgba(255, 255, 255, 0.792);
`;

const Participant = styled.div`
  background-color: #000000;
  color: white;
`;

const sampleExcursion: excursionType = {
  name: "Sobotni wypad",
  participants: [
    {
      name: "Piotrek",
      id: "300",
    },
    {
      name: "Kacper",
      id: "301",
    },
    {
      name: "Mixi",
      id: "302",
    },
  ],
  expenses: [
    {
      name: "Piwo irackie",
      price: 10,
      benefits: ["300", "301"],
      pays: "300",
    },
    {
      name: "Pizza",
      price: 27,
      benefits: ["300", "301"],
      pays: "301",
    },
    {
      name: "Pijalnia wudki i piwa",
      price: 20,
      benefits: ["300", "302"],
      pays: "302",
    },
    {
      name: "silver dragon",
      price: 14,
      benefits: ["301", "302"],
      pays: "301",
    },
  ],
};

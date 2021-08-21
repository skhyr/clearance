import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { excursionType } from "../types/excursion";
import { Excursion } from "../Components/Excursion";
import { RouteComponentProps } from "react-router-dom";

export const Excursions: React.FC<RouteComponentProps> = ({ history }) => {
  const [excursions, setExcursions] =
    useState<excursionType[]>(sampleExcursions);
  return (
    <Container>
      <Header>Your dashboard</Header>
      {excursions.map((excursion) => (
        <Excursion
          excursion={excursion}
          onPress={() => history.push(`/excursion`)}
        />
      ))}
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

const sampleExcursions: excursionType[] = [
  {
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
    ],
  },
  {
    name: "Wyjazd do warszawy",
    participants: [
      {
        name: "Piotrek",
        id: "31245123123",
      },
      {
        name: "mixi",
        id: "341551515",
      },
    ],
    expenses: [],
  },
  {
    name: "Chlanie pod mostem",
    participants: [
      {
        name: "Piotrek",
        id: "31245123123",
      },
      {
        name: "mixi",
        id: "341551515",
      },
    ],
    expenses: [],
  },
];

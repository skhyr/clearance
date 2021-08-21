import styled from "@emotion/styled";
import React from "react";
import { excursionType, expenseType } from "../types/excursion";

export const Excursion: React.FC<{
  excursion: excursionType;
  onPress: () => void;
}> = ({ excursion, onPress }) => {
  const sumExpenses = (expenses: expenseType[]) =>
    expenses.reduce((accum, curr) => accum + curr.price, 0);

  return (
    <Container onClick={onPress}>
      <Title>{excursion.name}</Title>
      <div>{sumExpenses(excursion.expenses)}PLN</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000000;
  border-radius: 20px;
  margin: 10px 10px;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export type excursionType = {
  name: string;
  participants: ParticipantType[];
  expenses: expenseType[];
};

export type ParticipantType = {
  id: string;
  name: string;
};

export type expenseType = {
  name: string;
  price: number;
  pays: string;
  benefits: string[];
};

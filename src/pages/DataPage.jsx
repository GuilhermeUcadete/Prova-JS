import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  color: #007bff;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const CurrentDate = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #0056b3;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #333;
`;

function DatePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState(currentDate.toDateString());

  const addDays = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(newDate);
    setDisplayDate(newDate.toDateString());
  };

  return (
    <PageContainer>
      <Title>Manipulação de Datas</Title>
      <Description>
        Veja como você pode manipular datas e adicionar dias à data atual.
      </Description>
      <CurrentDate>Data atual: {currentDate.toDateString()}</CurrentDate>
      <ButtonContainer>
        <Button onClick={() => addDays(1)}>Adicionar 1 dia</Button>
        <Button onClick={() => addDays(-1)}>Remover 1 dia</Button>
      </ButtonContainer>
      {displayDate !== currentDate.toDateString() && (
        <Result>Nova data: {displayDate}</Result>
      )}
    </PageContainer>
  );
}

export default DatePage;

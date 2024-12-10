import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #e6f7ff;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #34495e;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-bottom: 30px;
`;

const Info = styled.p`
  font-size: 16px;
  color: #2c3e50;
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1abc9c;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
`;

const Result = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #2c3e50;
`;

function ObjectPage() {
  const [person, setPerson] = useState({ name: "João", age: 25 });
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const updateName = () => {
    if (newName.trim() === "") {
      alert("Por favor, insira um nome válido.");
      return;
    }
    setPerson({ ...person, name: newName });
    setNewName("");
  };

  const updateAge = () => {
    const parsedAge = parseInt(newAge, 10);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      alert("Por favor, insira uma idade válida.");
      return;
    }
    setPerson({ ...person, age: parsedAge });
    setNewAge("");
  };

  return (
    <PageContainer>
      <Title>Manipulação de Objetos</Title>
      <Description>
        Atualize as propriedades de um objeto e veja como os dados mudam em tempo real.
      </Description>
      <InfoContainer>
        <Info><strong>Nome:</strong> {person.name}</Info>
        <Info><strong>Idade:</strong> {person.age}</Info>
      </InfoContainer>
      <ButtonContainer>
        <Input
          type="text"
          placeholder="Digite um novo nome..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button onClick={updateName}>Atualizar Nome</Button>
      </ButtonContainer>
      <ButtonContainer>
        <Input
          type="number"
          placeholder="Digite uma nova idade..."
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <Button onClick={updateAge}>Atualizar Idade</Button>
      </ButtonContainer>
      <Result>
        {newName || newAge ? (
          <p>Dados atualizados: Nome - {person.name}, Idade - {person.age}</p>
        ) : null}
      </Result>
    </PageContainer>
  );
}

export default ObjectPage;

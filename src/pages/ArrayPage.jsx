import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f8ff;
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

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const ListItem = styled.li`
  background-color: #ffffff;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  width: 300px;
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

const Result = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: #2c3e50;
`;

function ArrayPage() {
  const [items, setItems] = useState(["Maçã", "Banana", "Cereja"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") {
      alert("Por favor, insira um item válido.");
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <PageContainer>
      <Title>Manipulação de Arrays</Title>
      <Description>
        Adicione e remova itens de um array e veja como isso afeta a lista.
      </Description>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem key={index}>
            {item}
            <Button onClick={() => removeItem(index)}>Remover</Button>
          </ListItem>
        ))}
      </ListContainer>
      <div>
        <Input
          type="text"
          placeholder="Digite um novo item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button onClick={addItem}>Adicionar Item</Button>
      </div>
      {items.length > 0 && (
        <Result>
          Lista atualizada: {items.join(", ")}
        </Result>
      )}
    </PageContainer>
  );
}

export default ArrayPage;

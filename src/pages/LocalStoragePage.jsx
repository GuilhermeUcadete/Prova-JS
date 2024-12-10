import React, { useState, useEffect } from 'react';
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

const Input = styled.input`
  padding: 8px 12px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
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

const Result = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #2c3e50;
`;

function LocalStoragePage() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const saveItem = () => {
    if (newItem.trim() === "") {
      alert("Por favor, insira um item para salvar.");
      return;
    }

    const updatedItems = [...items, newItem];
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
    setNewItem("");
  };

  const clearItems = () => {
    localStorage.removeItem('items');
    setItems([]);
  };

  return (
    <PageContainer>
      <Title>Persistência de Múltiplos Itens com LocalStorage</Title>
      <Description>
        Salve e visualize múltiplos itens usando o LocalStorage do navegador. Os dados persistem mesmo após o fechamento do navegador.
      </Description>
      <Input
        type="text"
        placeholder="Digite um item para salvar..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <div>
        <Button onClick={saveItem}>Salvar Item</Button>
        <Button onClick={clearItems}>Limpar Todos os Itens</Button>
      </div>
      <Result>
        {items.length > 0 ? (
          <div>
            <p><strong>Itens salvos:</strong></p>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Nenhum item salvo.</p>
        )}
      </Result>
    </PageContainer>
  );
}

export default LocalStoragePage;
  
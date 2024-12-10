import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #007bff;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
`;

const InputField = styled.input`
  width: 100px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #333;
`;

function MathPage() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleCalculation = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Por favor, insira números válidos.');
      return;
    }

    let calcResult;
    switch (op) {
      case 'add':
        calcResult = n1 + n2;
        break;
      case 'subtract':
        calcResult = n1 - n2;
        break;
      case 'multiply':
        calcResult = n1 * n2;
        break;
      case 'divide':
        if (n2 === 0) {
          alert('Divisão por zero não é permitida.');
          return;
        }
        calcResult = n1 / n2;
        break;
      default:
        alert('Operação inválida.');
        return;
    }
    setResult(calcResult);
    setOperation(op);
  };

  return (
    <PageContainer>
      <Title>Operações Matemáticas</Title>
      <Description>Insira dois números e escolha uma operação matemática para calcular:</Description>
      <InputContainer>
        <InputLabel htmlFor="num1">Número 1:</InputLabel>
        <InputField
          id="num1"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="num2">Número 2:</InputLabel>
        <InputField
          id="num2"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </InputContainer>
      <div>
        <Button onClick={() => handleCalculation('add')}>Soma</Button>
        <Button onClick={() => handleCalculation('subtract')}>Subtração</Button>
        <Button onClick={() => handleCalculation('multiply')}>Multiplicação</Button>
        <Button onClick={() => handleCalculation('divide')}>Divisão</Button>
      </div>
      {result !== null && (
        <Result>
          Resultado da {operation === 'add' ? 'soma' : operation === 'subtract' ? 'subtração' : operation === 'multiply' ? 'multiplicação' : 'divisão'}: {result}
        </Result>
      )}
    </PageContainer>
  );
}

export default MathPage;

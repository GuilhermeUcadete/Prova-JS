import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 30px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LinkButton = styled(Link)`
  display: block;
  padding: 12px 15px;
  margin: 10px 0;
  text-decoration: none;
  background-color: #2c3e50;
  color: #fff;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1abc9c;
    transform: scale(1.05);
  }
`;

const PageSummary = styled.p`
  margin: 15px 0;
  font-size: 1rem;
  color: #2c3e50;
  text-align: justify;
`;

function HomePage() {
  return (
    <PageContainer>
      <Title>Bem-vindo ao Explorador de JavaScript e React</Title>
      <Description>Explore e aprenda sobre conceitos fundamentais de programação em JavaScript e React. Escolha uma funcionalidade abaixo para começar.</Description>

      <Section>
        <LinkButton to="/math">Operações Matemáticas</LinkButton>
        <PageSummary>
          A página de <strong>Matemática</strong> permite que você execute operações como cálculos de raiz quadrada, potência e geração de números aleatórios. Teste suas operações matemáticas de forma interativa e veja os resultados em tempo real.
        </PageSummary>
      </Section>

      <Section>
        <LinkButton to="/date">Manipulação de Datas</LinkButton>
        <PageSummary>
          A página de <strong>Datas</strong> mostra como manipular datas em JavaScript, incluindo a adição e remoção de dias. Aprenda a trabalhar com objetos de data de maneira dinâmica e veja o impacto de suas alterações.
        </PageSummary>
      </Section>

      <Section>
        <LinkButton to="/array">Manipulação de Arrays</LinkButton>
        <PageSummary>
          Na página de <strong>Arrays</strong>, você pode adicionar, remover e visualizar itens de uma lista. Descubra como usar métodos como `map`, `filter` e `push` para trabalhar de forma eficiente com arrays.
        </PageSummary>
      </Section>

      <Section>
        <LinkButton to="/object">Manipulação de Objetos</LinkButton>
        <PageSummary>
          Explore a página de <strong>Objetos</strong> para aprender como criar, modificar e acessar propriedades de objetos em JavaScript. Descubra técnicas de manipulação de dados para desenvolver soluções eficientes.
        </PageSummary>
      </Section>

      <Section>
        <LinkButton to="/localstorage">Persistência de Dados</LinkButton>
        <PageSummary>
          Na página de <strong>LocalStorage</strong>, veja como armazenar e recuperar dados localmente no navegador. Entenda como criar uma persistência simples para suas aplicações web.
        </PageSummary>
      </Section>

      <Section>
        <LinkButton to="/api">Consumo de APIs</LinkButton>
        <PageSummary>
          A página de <strong>Consumo de APIs</strong> mostra como buscar e exibir dados de APIs externas usando JavaScript e React. Aprenda a trabalhar com requisições HTTP e a tratar respostas em formato JSON.
        </PageSummary>
      </Section>
    </PageContainer>
  );
}

export default HomePage;

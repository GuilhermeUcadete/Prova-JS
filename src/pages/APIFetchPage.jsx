import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e9ecef;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 250px;
  border-radius: 5px;
  border: 2px solid #007bff;
  margin-bottom: 10px;
  outline: none;
  transition: border-color 0.3s ease;
  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

const WeatherContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
`;

const WeatherInfo = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: #d9534f;
  margin-top: 15px;
  font-size: 1rem;
`;

function APIFetchPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY; // Use a variável de ambiente
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error('Erro na requisição à API');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (error) {
      console.error('Erro ao buscar os dados do tempo:', error);
      setWeather(null);
      setError('Não foi possível obter os dados do clima. Verifique a cidade e tente novamente.');
    }
  };

  return (
    <PageContainer>
      <Title>Verifique o Clima</Title>
      <Input
        type="text"
        placeholder="Digite uma cidade ou país"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={fetchWeather}>Buscar</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {weather && (
        <WeatherContainer>
          <WeatherInfo>Localização: {weather.name}, {weather.sys.country}</WeatherInfo>
          <WeatherInfo>Temperatura: {weather.main.temp} °C</WeatherInfo>
          <WeatherInfo>Condição: {weather.weather[0].description}</WeatherInfo>
        </WeatherContainer>
      )}
    </PageContainer>
  );
}

export default APIFetchPage;

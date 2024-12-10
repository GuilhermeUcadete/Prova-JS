import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MathPage from './pages/MathPage';
import DatePage from './pages/DataPage';
import ArrayPage from './pages/ArrayPage';
import ObjectPage from './pages/ObjectPage';
import LocalStoragePage from './pages/LocalStoragePage';
import APIFetchPage from './pages/APIFetchPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/date" element={<DatePage />} />
        <Route path="/array" element={<ArrayPage />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/localstorage" element={<LocalStoragePage />} />
        <Route path="/api" element={<APIFetchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


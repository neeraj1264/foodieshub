import React from 'react';
// import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Category from './components/categories/Category';

function App() {

  return (
  <>
  <Header/>
  <Hero/>
  <Category/>
  </>
  )
}

export default App

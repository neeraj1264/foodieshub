import React from 'react';
// import ReactDOM from 'react-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Category from './components/categories/Category';
import Layout from './Layout';
import CategoryPage from './components/CategoryPage';
import Pizza from './components/Pizza';

function App() {

  return (
  <>
   <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<Hero/>} />
      <Route path="Pizza" element={<Pizza/>} />
      <Route path="/category/:categoryName" element={<CategoryPage/>} />
    </Route>
  </Routes>
  </>
  )
}

export default App

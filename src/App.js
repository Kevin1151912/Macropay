import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Importa el nuevo componente
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Navbar /> 
            <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

const drugs = [
  {
    id: 1,
    name: 'Anti-malaria Drugs',
    img: '',
  },
  {
    id: 2,
    name: 'Cough Syrups',
    img: ''    
  },
  {
    id: 3,
    name: 'Body Lotion',
    img: '' 
  },
  {
    id: 4,
    name: 'Diet Aiding Drugs',
    img: ''    
  },
  {
    id: 5,
    name: 'Antibiotics',
    img: ''    
  },
  {
    id: 6,
    name: 'Eye Drops',
    img: ''    
  },
  {
    id: 7,
    name: 'Diabetes Drugs',
    img: ''    
  },
  {
    id: 8,
    name: 'Anti-allergy Drugs',
    img: ''    
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services drugs={drugs}/>
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

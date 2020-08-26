import React, {Component} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Services />
        <Products /> 
        <Contact />
        <Footer />
      </div>  
    )
  }
}

export default App;

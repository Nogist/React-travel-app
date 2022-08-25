import React from 'react';
import { Header, Navbar, Destination, Search, Select, Footer, ImgCarousel } from './components';
import './App.css';
// import Select from './components/select/Select'

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Destination />
    <Search />
    <Select />
    <ImgCarousel />
    <Footer />
  </div>
);

export default App;

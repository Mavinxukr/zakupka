import React from 'react';
import Header from './Components/shared/Header/Header';
import Footer from './Components/shared/Footer/Footer';
import RegUser from './Components/shared/RegUser/RegUser';
import './index.scss';

const App = () => (
  <div className="App">
    <Header />
    <RegUser />
    <h1>Start zakupka</h1>
    <Footer />
  </div>
);

export default App;

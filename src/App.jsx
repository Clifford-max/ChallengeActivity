import React from 'react';
import Header from './components/Header';
import Car from './components/Car';
import FormContainer from './components/FormContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="fullscreen-main">
        <Car />
        <FormContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
import React from 'react';
import Header from './Header'; 
import Footer from './Footer';

export default function Home({ children }) {
  return (
    <div className="app">
      <Header titulo='Ernesto' subtitulo='Pepito'/>

      <main className="container">
        {children}
      </main>

      <Footer />
    </div>
  );
}
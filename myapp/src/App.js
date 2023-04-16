import React from 'react';
import './App.css';
import Profile from './profile/profile';


function App() {
  
  return (
    <div className="App">
      <header></header>
      <section>
      </section>
      <article><Profile fullName={["Yassin", "Khleif"]} bio="A young man in the 17 years old of his age" profession="High School student in the second year"/></article>
      <footer></footer>
    </div>
  );
}

export default App;

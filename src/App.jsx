// app.jsx
import { useState } from 'react';
import './App.css';
import Login from "../src/components/login/Login"; // Asegúrate de que la ruta del componente Login sea correcta

function App() {

  return (
    <>
      <h1>Inicia Sesion</h1>
      <Login /> {/* Renderiza el componente Login aquí */}
    </>
  );
}

export default App;

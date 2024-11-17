import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [racas, setRaca] = useState([]);
  const [busca, setBusca] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/doguinhos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setRaca(dados);
      });
  }, []);

  useEffect(() => {
    if (busca && busca.length > 3) {
      fetch("http://localhost:8080/doguinhos?nome=" + busca)
        .then((resposta) => resposta.json())
        .then((dados) => {
          setRaca(dados);
        });
    }
  }, [busca]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem vindo ao Doguinhos</h1>
        <h4>COnfira abaixo uma lista de raças dos doguinhos</h4>
        <input
          placeholder="Busque por raça"
          onChange={(evento) => setBusca(evento.target.value)}
        ></input>
        <ul>
          {racas.map((raca) => (
            <li key={raca.nome}> {raca.nome} </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

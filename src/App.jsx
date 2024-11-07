import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [libro, setLibro] = useState({ titulo: "", autor: "" });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      libro.titulo.length > 3 &&
      !/^ /.test(libro.titulo) &&
      libro.autor.length >= 6
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1>Carga tu libro favorito</h1>
      <form onSubmit={handleSubmit}>
        <label>Ingrese el nombre de un libro: </label>
        <input
          type="text"
          onChange={(e) => setLibro({ ...libro, titulo: e.target.value })}
        />
        <label>Ingresa el autor del libro:</label>
        <input
          type="text"
          onChange={(e) => setLibro({ ...libro, autor: e.target.value })}
        />
        <button>Enviar</button>

        {error ? (
          <h4 style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </h4>
        ) : null}
      </form>

      {show ? <Card libro={libro} /> : null}
    </>
  );
}

export default App;

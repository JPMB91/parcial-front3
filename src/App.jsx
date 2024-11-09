import { useState } from "react";
import { validarLibro, validarPelicula } from "./utils/validateInputs";
import {formulario, errorMessage} from './styles/App.module.css';
import { Card } from "./components/Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [formData, setFormData] = useState({
    libro: "",
    pelicula: "",
  });

  const [error, setErrors] = useState({
    libroFavorito: "",
    peliculaFavorita: ""
  });

  const [showForm, setShowForm] =  useState(true)

  const [showCard, setShowCard] = useState(false)

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data, [name]: value
    }))
  };


  const submitHandler = (e) => {
    e.preventDefault();
    const isLibroValid = validarLibro(formData.libro);
    const isPeliculaValid = validarPelicula(formData.pelicula);
    if (isLibroValid && isPeliculaValid) {
      setShowForm(false)
      setShowCard(true)

    }
    else{
      const erroresEncontrados = {
        libro: isLibroValid ? "" : "Por favor chequea que la información sea correcta",
        pelicula: isPeliculaValid ? "" : "Por favor chequea que la información sea correcta"
      }

      setErrors(erroresEncontrados)
    }

    // Limpio los campos
    setFormData((data) => ({
      libro: isLibroValid ? data.libro : "",
      pelicula: isPeliculaValid ? data.pelicula : "",
    
    }));
  };

  return (
    <div className={formulario}>
      <h1>Trivia Random</h1>

      {showForm && (
         <form onSubmit={submitHandler}>
         <label htmlFor="libro">El nombre de un libro que tenga 3 caracteres</label>
         <input
           type="text"
           name="libro"
           value={formData.libro}
           onChange={handleChange}
           placeholder="Libro"
         />
         {error.libro && (
           <h5 className={errorMessage}>{error.libro}</h5>
         )}
         <label htmlFor="pelicula">El nombre de una pelicula que tenga al menos 6 caracteres</label>
         <input
           type="text"
           name="pelicula"
           value={formData.pelicula}
           onChange={handleChange}
           placeholder="Pelicula"
         />
 
         {error.pelicula && (
           <h5 className={errorMessage}>{error.pelicula}</h5>
         )}
         <button type="submit">Enviar</button>
       </form>
 
      )}
     
      {showCard && (
         <Card libro={formData.libro} pelicula={formData.pelicula}/>
      )}
     
    </div>
  );
}

export default App;

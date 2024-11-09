import {tarjeta} from '../styles/Card.module.css'

export const Card = ({ libro, pelicula }) => {
  return (
    <div className={tarjeta}>
      <h2>{`El libro que ingresaste fue: ${libro}`}</h2>
      <h2>{`La pelicula que ingresaste fue: ${pelicula}`}</h2>
    </div>
      
    
  );
};

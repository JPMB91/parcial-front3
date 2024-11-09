export const validarLibro = (libro) => {
  libro = libro.trim();
  
  if(libro.length >= 3){
    return true;
  }else{
    return false;
  }
};

export const validarPelicula = (pelicula) => {
  pelicula = pelicula.trim();
  // const isValidText = /[a-zA-Z]/.test(pelicula)

  if(pelicula.length >= 6){
    return true
  }else{
    return false;
  }
};

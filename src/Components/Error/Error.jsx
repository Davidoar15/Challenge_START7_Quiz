import errorImage from '../../assets/Survey-error-image.png';

function Error() {

  return (
    <div>
        <div style={{width: "200px", height: "auto"}}>
          <img style={{width: "100%", height: "100%"}} src={errorImage} alt='Page Error'/>
        </div>
        <h1>ERROR 404: Página No Encontrada</h1>
        <h3>
          Vaya, parece que no podemos encontrar 
          la página que buscas. Intenta volver a 
          la página anterior
        </h3>
    </div>
  );
}

export default Error;
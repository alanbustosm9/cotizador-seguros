import { useState } from "react";
import styled from '@emotion/styled'

import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Resumen } from "./components/Resumen";
import { Resultado } from "./components/Resultado";
import { Spinner } from "./components/Spinner";

// Styled Components dependen de si la etiqueta HTML tiene apertura y cierre
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;

`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {


  const [ resumen, setResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })  

  const [ cargando, setCargando ] = useState(false)

  // Extraer los datos
  const { cotizacion, datos } = resumen;


  return (
    <Contenedor >
      <Header
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>
        <Formulario 
          setResumen = { setResumen }
          setCargando = { setCargando }
        />
        { cargando ? <Spinner /> : null }
        
        {/*  Se puede usar un ternario aca o crearlo en el Component de Resumen.js */}
        <Resumen
          datos = { datos }
        />

        { !cargando 
          ? <Resultado
              cotizacion = { cotizacion }
            />  
          : null}
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

import rickmorty from  './img/rick-morty.png'
import './App.css';
import {useState} from 'react';
import Personajes from '../src/components/personajes'

function App() {
//creacion de estado para guardar el array de todo los personajes
const [personajes , setPersonajes] = useState(null);

  //peticion a la api de rick and morty...
const reqApi= async ()=>{
  const api = await fetch('https://rickandmortyapi.com/api/character');
 //aqui capturo el json que resibo de la peticion a la api
  const personajes = await api.json();
  setPersonajes(personajes.results);

 
}

  return (
    <div className="App">
      <h1 className="title">Rick & Morty</h1>
      {personajes ? (
        <Personajes propPersonaje={personajes}/>
      ):(
        <>
      <img src={rickmorty} alt="Rick & Morty" className="img-home"></img>
      <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
      </>)}
      
      
    </div>
  );
}

export default App;

import React from "react";


export default function Personajes(props){
    console.log(props)


    const resetPersonajes = ()=>{
       // setPersonajes(null)

    }

    const {propPersonaje} = props
    return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetPersonajes}>Volver a home</span>
        <div className="container-characters">
           {propPersonaje.map((character, index)=>(
               <div className="character-container" key={index}>

                <div className="ALGO">
                    <img src={character.image} alt={character.name}></img>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>{character.status === 'Alive' ?(
                            <>
                            <span className="alive"></span>
                            Alive
                            </>
                        ):(
                            <>
                            <span className="dead"></span>
                            Dead
                            </>
                        )}</h6>
                        <p className="text-grey"><span>Episodios: </span>
                        <span>
                            {character.episode.length}
                        </span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>

                    </div>
                    
                </div>
           ))}
          
        </div>
        <span className="back-home" onClick={resetPersonajes}>Volver a la Home</span> 
    </div>
    )    
}
import React from 'react';
const GenericPokemonList = props => {
    const { pokemons } = props;        
    let title = props.title; 

    return (
        <>
            <h4>{title}</h4>
            <ul>
                {pokemons && pokemons.map((pokemon, index) => (
                    <li key={index} >                       
                        {pokemon}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default GenericPokemonList;

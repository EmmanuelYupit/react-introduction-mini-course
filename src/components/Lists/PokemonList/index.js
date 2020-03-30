import React from 'react';
const PokemonList = props => {
    const { onSetList, pokemons, onSetDeletedList, deletedPokemons } = props;
    const handleClick = id => {
        const pokemonsCopy = pokemons.filter((pokemon, index) => index !== id);
        onSetList(pokemonsCopy);
        const deletedPokemonsCopy = deletedPokemons;
        deletedPokemonsCopy.push(pokemons[id]);
        onSetDeletedList(deletedPokemonsCopy);
    };

    return (
        <>
            <h4>Pokemon List</h4>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index} onClick={() => handleClick(index)}>
                        {pokemon}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PokemonList;

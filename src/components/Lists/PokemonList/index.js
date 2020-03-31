import React from 'react';
const PokemonList = props => {
    const { pokemons, likedPokemons, unlikedPokemons } = props;
    

    return (
        <>
            <h4>Pokemon List</h4>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                       {( !likedPokemons.includes(index) && <img src={'/img/like.png'} alt="Like" onClick={() => props.onClickLike(index)} /> )}
                       {( !unlikedPokemons.includes(index) && <img src={'/img/unlike.png'} alt="Unlike"  onClick={() => props.onClickUnLike(index)} /> )}
                        {pokemon}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PokemonList;

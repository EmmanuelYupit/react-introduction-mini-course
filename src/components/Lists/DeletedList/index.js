import React from 'react';

const DeletedList = ({ deletedPokemons }) => {
    return (
        <>
            <h4>Deleted Pokemons :(</h4>
            <ul>
                {deletedPokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon}</li>
                ))}
            </ul>
        </>
    );
};

export default DeletedList;

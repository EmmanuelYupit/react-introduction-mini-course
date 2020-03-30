import React from 'react';
import PokemonList from '../../components/Lists/PokemonList';
import DeletedList from '../../components/Lists/DeletedList';

const Home = () => (
    <div className="header">
        <h1>Hello World!</h1>
        <div className="container">
            <div className="poke-list">
                <PokemonList />
            </div>
            <div className="poke-list">
                <DeletedList />
            </div>
        </div>
    </div>
);
export default Home;

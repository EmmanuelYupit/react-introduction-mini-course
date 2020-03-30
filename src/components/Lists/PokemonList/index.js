import React, { Component } from 'react';
class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [
                'Bulbasaur',
                'Ivysaur',
                'Venusaur',
                'Charmander',
                'Charmeleon',
                'Charizard',
                'Squirtle',
                'Wartortle',
                'Blastoise',
                'Metapod',
            ],
        };
    }

    render() {
        const { pokemons } = this.state;
        const { status } = this.props;
        return (
            <>
                <h4>Pokemon List</h4>
                <p>status: {status.toString()}</p>
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>{pokemon}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default PokemonList;

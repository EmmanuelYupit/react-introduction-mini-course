import React, { Component } from 'react';
class DeletedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedPokemons: ['Charmander', 'Charmeleon'],
        };
    }

    render() {
        const { deletedPokemons } = this.state;
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
    }
}

export default DeletedList;

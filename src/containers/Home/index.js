import React from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import PokemonList from '../../components/Lists/PokemonList';
import DeletedList from '../../components/Lists/DeletedList';

const App = props => {
    return (
        <div className="header">
            <h1>Hello World!</h1>
            <div className="container">
                <div className="poke-list">
                    <PokemonList {...props} />
                </div>
                <div className="poke-list">
                    <DeletedList {...props} />
                </div>
            </div>
        </div>
    );
};

export default connect(selectors.propsSelector, dispatcher)(App);

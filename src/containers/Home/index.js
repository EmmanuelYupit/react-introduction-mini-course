import React from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import PokemonList from '../../components/Lists/PokemonList';
import GenericPokemonList from '../../components/Lists/GenericPokemonList';

const App = props => {
    const { pokemons, likedPokemons, unlikedPokemons, onSetLikedPokemons, onSetUnlinkedPokemons } = props;    
    
    const likedPokemonsNameList = pokemons.filter((currentValue, index ) => likedPokemons.includes(index) ); 
    const unLikedPokemonsNameList = pokemons.filter((currentValue, index ) => unlikedPokemons.includes(index) ); 

    /*const handleClick = id => {
        const pokemonsCopy = pokemons.filter((pokemon, index) => index !== id);
        onSetList(pokemonsCopy);
        const deletedPokemonsCopy = deletedPokemons;
        deletedPokemonsCopy.push(pokemons[id]);
        onSetDeletedList(deletedPokemonsCopy);
    }; */

    const addLike = index =>{
        if(!likedPokemons.includes(index)){
            let likedPokemonsCopy = likedPokemons.slice(); 
            likedPokemonsCopy.push(index); 
            onSetLikedPokemons(likedPokemonsCopy); 
        }
    }

    const removeLike = index => {
        if(likedPokemons.includes(index)){
            console.log('its included'); 
            let likedPokemonsCopy = likedPokemons.filter((currentValue) => index !== currentValue);                        
            console.log(likedPokemonsCopy); 
            onSetLikedPokemons(likedPokemonsCopy); 
        }
    }

    const addUnLike = index => {
        if(!unlikedPokemons.includes(index)){
            let unlikedPokemonsCopy = unlikedPokemons.slice(); 
            unlikedPokemonsCopy.push(index); 
            onSetUnlinkedPokemons(unlikedPokemonsCopy);             
        }
    }

    const removeUnLike = index => {
        if(unlikedPokemons.includes(index)){
            let unlikedPokemonsCopy = unlikedPokemons.filter((currentValue) => index !== currentValue);                        
            onSetUnlinkedPokemons(unlikedPokemonsCopy); 
        }
    }
    

    const clickLike = index =>{
        addLike(index); 
        removeUnLike(index); 
    }; 

    const clickUnLike = index =>{        
        removeLike(index); 
        addUnLike(index);        
    }; 

    return (
        <div className="header">            
            <div className="container">
                <div className="poke-list">
                    <PokemonList pokemons={pokemons} 
                        onClickLike={(index) => clickLike(index)} 
                        onClickUnLike={(index) => clickUnLike(index)} 
                        likedPokemons={likedPokemons} unlikedPokemons={unlikedPokemons}

                        />
                </div>
                <div className="poke-list">
                    <GenericPokemonList title="Liked Pokemons" pokemons={likedPokemonsNameList} />
                </div>
                <div className="poke-list">
                    <GenericPokemonList title="Unliked Pokemons" pokemons={unLikedPokemonsNameList} />
                </div>
            </div>
        </div>
    );
};

export default connect(selectors.propsSelector, dispatcher)(App);

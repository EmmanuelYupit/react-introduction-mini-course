import actions from './actions';

const initialState = {
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
    deletedPokemons: [],
    likedPokemons: [], 
    unlikedPokemons: [], 

};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, pokemons: [...payload] };
        case actions.setDeletedList.type:
            return { ...state, deletedPokemons: [...payload] };
        case actions.setLikedPokemons.type:
            return { ...state, likedPokemons: [...payload] };
        case actions.setUnlikedPokemons.type:
            return { ...state, unlikedPokemons: [...payload] };
        default:
            return state;
    }
}

export default reducer;

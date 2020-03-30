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
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, pokemons: [...payload] };
        case actions.setDeletedList.type:
            return { ...state, deletedPokemons: [...payload] };
        default:
            return state;
    }
}

export default reducer;

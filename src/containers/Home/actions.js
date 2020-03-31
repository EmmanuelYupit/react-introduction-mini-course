import createActions from '../../services/createActions';

const prefix = '@react-intro/app';

const types = ['SET_LIST', 'SET_DELETED_LIST', 'SET_LIKED_POKEMONS', 'SET_UNLIKED_POKEMONS'];

const { setList, setDeletedList, setLikedPokemons, setUnlikedPokemons } = createActions(prefix, types);

export default {
    setList,
    setDeletedList,
    setLikedPokemons, setUnlikedPokemons 
};

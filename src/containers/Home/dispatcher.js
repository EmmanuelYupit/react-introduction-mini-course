import actions from './actions';

const dispatcher = dispatch => ({
    onSetList: array => dispatch(actions.setList(array)),
    onSetDeletedList: array => dispatch(actions.setDeletedList(array)),
    onSetLikedPokemons: array => dispatch(actions.setLikedPokemons(array)),
    onSetUnlinkedPokemons: array => dispatch(actions.setUnlikedPokemons(array)),
});

export default dispatcher;

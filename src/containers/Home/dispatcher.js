import actions from './actions';

const dispatcher = dispatch => ({
    onSetList: array => dispatch(actions.setList(array)),
    onSetDeletedList: array => dispatch(actions.setDeletedList(array)),
});

export default dispatcher;

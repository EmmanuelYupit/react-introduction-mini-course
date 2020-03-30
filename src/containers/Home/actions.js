import createActions from '../../services/createActions';

const prefix = '@react-intro/app';

const types = ['SET_LIST', 'SET_DELETED_LIST'];

const { setList, setDeletedList } = createActions(prefix, types);

export default {
    setList,
    setDeletedList,
};

import createActions from '../../services/createActions';

const prefix = '@react-intro/app';

const types = ['SET_STATUS'];

const { setStatus } = createActions(prefix, types);

export default {
    setStatus,
};

import actions from './actions';

const initialState = { status: false };

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setStatus.type:
            return { ...state, status: !state.status };
        default:
            return state;
    }
}

export default reducer;

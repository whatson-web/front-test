
const initialState = {
    page: 'DASHBOARD'
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                page: action.data.page
            }
        default:
            return state;
    }
};

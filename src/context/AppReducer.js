export default (state, action) => {
    switch(action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                events: [action.payload, ...state.events]
            };
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
            }
        default:
            return state;
    }
}
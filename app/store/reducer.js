const reducer = (state = [], action) => {

    switch (action.type) {

        case 'ADD_BUG':
            return state.concat({
                id: action.payload.id,
                description: action.payload.description,
                resolved: false
            })
            break;

        case 'REMOVE_BUG':
            return state.filter(bug => bug.id !== action.payload.id)
            break;

        case 'TOGGLE_RESOLVE_BUG':
            return state.map(bug => {
                if (bug.id === action.payload.id) bug.resolved = !bug.resolved
                return bug
            })
            break;

        default:
            return state
            break;
    }
}

export default reducer
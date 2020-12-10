export const addBug = (id, description) => ({
    type: 'ADD_BUG',
    payload: {
        id,
        description
    }

})

export const removeBug = (id) => ({
    type: 'REMOVE_BUG',
    payload: {
        id
    }
})


export const toggleResolveBug = (id) => ({
    type: 'TOGGLE_RESOLVE_BUG',
    payload: {
        id
    }
})
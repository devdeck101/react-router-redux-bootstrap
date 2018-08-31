export const ADD_ITEM = 'ADD_ITEM'
export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}

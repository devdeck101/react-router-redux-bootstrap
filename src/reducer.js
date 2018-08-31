import { ADD_ITEM, REMOVE_ITEM } from './actions'
export const itemsList = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            let newArray = []
            state.map(item => {
                item.id !== action.payload ? newArray.push(item) : null
            })
            return newArray
        default:
            return state
    }
}
export const items = (state = [], action) => state


import {combineReducers} from 'redux'
import { GETHOMEPAGE, ADD_SHOP, REDUCE_SHOP, CLEAR_SHOPCAR} from './action-types'
function pages(state={},action) {
    switch (action.type){
        case GETHOMEPAGE:
            return action.data
        default:
            return state
    }
}
function shop(state=[],action) {
    switch (action.type) {
        case ADD_SHOP:
            return state.push(action.data)
        case REDUCE_SHOP:
            return state.splice(action.data,1)
        case CLEAR_SHOPCAR:
            return state = {}
        default: state     
    }
}
export default combineReducers({
    pages,
    shop
})

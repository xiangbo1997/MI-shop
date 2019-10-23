import { combineReducers } from 'redux'
import { GETHOMEPAGE, ADD_SHOP, REDUCE_SHOP, CLEAR_SHOPCAR, GTE_USER, REMOVE_USER, UPDATE_USER, SAVE_DISTRICT } from './action-types'
import { setItem, getItem, removeItem } from '../util/storage.js';
function pages(state = {}, action) {
    switch (action.type) {
        case GETHOMEPAGE:
            return action.data
        default:
            return state
    }
}
function shop(state = [], action) {
    switch (action.type) {
        case ADD_SHOP:
            return state.push(action.data)
        case REDUCE_SHOP:
            return state.splice(action.data, 1)
        case CLEAR_SHOPCAR:
            return state = {}
        default:
            return state
    }
}








// 获取用户信息
// 初始化数据
const initUser = getItem('user') || {};



function user(prevState = initUser, action) {
   
    switch (action.type) {
        case GTE_USER:
            //存储
            setItem('user', action.data);
            return action.data
        case UPDATE_USER:
            setItem('user', action.data);
            return action.data
        case REMOVE_USER:
            removeItem('user', action.data)
            return action.data
        default:
            return prevState
    }
}

function district(prevState = [], action) {
    switch (action.type) {
        case SAVE_DISTRICT:
            return action.data
        default:
            return prevState


    }

}


export default combineReducers({
    pages,
    shop,
    user
})

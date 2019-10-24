import { combineReducers } from 'redux'
import { GETHOMEPAGE, ADD_SHOP, REDUCE_SHOP, CLEAR_SHOPCAR, GTE_USER, REMOVE_USER, UPDATE_USER, SAVE_DISTRICT,IS_CHECKED,DELETE_SHOP } from './action-types'
import { setItem, getItem, removeItem } from '../util/storage.js';
function pages(state=[],action) {
    switch (action.type){
        case GETHOMEPAGE:
            return action.data
        default:
            return state
    }
}
function shops(state=[],action) {
     const data = action.data
     const ishaveShop = state.find((item, index) => {
         return item.name === data.name

     })
    switch (action.type) {
        //增加购物车中商品的数量，如果没有此商品，那么商品添加一个num为1，
        //如果有此商品，那么商品的数量+1
        case ADD_SHOP:
            if (ishaveShop){
                ++ishaveShop.num
            }else{
                data.num = 1
                state.push(data)
            }
            return state
        //减少商品数量，
        case REDUCE_SHOP:
            if (ishaveShop){
                --ishaveShop.num
            }
            return state
        //商品是否被选中
        case IS_CHECKED:
            if(ishaveShop){
                ishaveShop.isChecked = !ishaveShop.isChecked
            }
            return state

        case CLEAR_SHOPCAR:
            return 
        default: 
            return state
        //删除商品
        case DELETE_SHOP:
            if(ishaveShop){
                const index = state.indexOf(ishaveShop)
                state.splice(index,1)
                return state
            }

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
    shops,
    user
})

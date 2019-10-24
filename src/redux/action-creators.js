import { GETHOMEPAGE, GTE_USER,UPDATE_USER,REMOVE_USER ,SAVE_DISTRICT, IS_CHECKED,DELETE_SHOP,ADD_SHOP,REDUCE_SHOP} from './action-types'
import { rehomepage, reUserInfo } from '../api'
export const gethome_page = (pages)=>({type:GETHOMEPAGE,data:pages})
export const gethome_pages = ()=>{
  return async (dispatch)=>{
       const result = await rehomepage();
       dispatch(gethome_page(result))
  }
};


export const addShop = (shop)=>({type:ADD_SHOP,data:shop})
export const reduceShop = (shop) =>({type:REDUCE_SHOP,data:shop})
export const ischeckedShop = (isChecked) => ({type: IS_CHECKED,data:isChecked})
export const deleteShop = (shop) => ({type: DELETE_SHOP,data:shop})


// const updateCategorySuccess = (category) => ({type: UPDATE_CATEGORY_SUCCESS, data: category});
// // 添加分类数据
// export const updateCategory = (categoryId, categoryName) => {
//   return async (dispatch) => {
//     const result = await reqUpdateCategory(categoryId, categoryName);
//     dispatch(updateCategorySuccess(result));
//   }
// };

//获取用户信息
const getUserInfoSuccess = (user) => ({ type: GTE_USER, data: user })
export const getUsrInfo =  (username, password) => {
 
  return async (dispatch) => {
   
    const result = await reUserInfo(username, password);
   
    dispatch(getUserInfoSuccess(result.data))
  }
}
//更新用户信息
export const updateUserInfo=(user)=>({type:UPDATE_USER,data:user})
//退出登录删除用户信息
export const removeUserInfo =()=>({type:REMOVE_USER,data:{}});
//存储地址信息
export const updateDistrict =(district)=>({type:SAVE_DISTRICT,data:district})




















// export const gethome_pages= ()=>{
//     return async (dispatch)=>{
//         const result = await rehomepage();
//         dispatch(gethome_page(result))
//     }
// }
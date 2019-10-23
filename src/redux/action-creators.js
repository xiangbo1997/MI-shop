import { GETHOMEPAGE, GTE_USER } from './action-types'
import { rehomepage, reUserInfo } from '../api'
export const gethome_page = (pages) => ({ type: GETHOMEPAGE, data: pages })
export const gethome_pages = () => {
  return async (dispatch) => {
    const result = await rehomepage();
    dispatch(gethome_page(result))
  }
};




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
  console.log(username, password)
  return async (dispatch) => {
    console.log('-1-1-')
    const result = await reUserInfo(username, password);
    console.log(result)
    dispatch(getUserInfoSuccess(result))
  }
}




















// export const gethome_pages= ()=>{
//     return async (dispatch)=>{
//         const result = await rehomepage();
//         dispatch(gethome_page(result))
//     }
// }
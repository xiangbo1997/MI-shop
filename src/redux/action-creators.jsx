import {GETHOMEPAGE,} from './action-types'
import {rehomepage} from '../api'
export const gethome_page = (pages)=>({type:GETHOMEPAGE,data:pages})
export const gethome_pages = ()=>{
  return async (dispatch)=>{
       const result = await rehomepage();
       dispatch(gethome_page(result))
  }
};






















// export const gethome_pages= ()=>{
//     return async (dispatch)=>{
//         const result = await rehomepage();
//         dispatch(gethome_page(result))
//     }
// }
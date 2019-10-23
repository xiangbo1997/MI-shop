import axios from  'axios'
export const rehomepage = ()=> axios.get('/firstpage')
// 获取登录用户信息
export const reUserInfo = (username,password)=> axios.get('/login',{params:{username,password} })
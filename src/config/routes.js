import Login from '../containers/login'
import Entry from '../containers/entry'
import Profile from '../containers/profile'
import ShoppingCart from '../containers/shoppingcart'
import Home from '../containers/home'
import ShopDetail from '../containers/ShopDetail/ShopDetail'
//配置weixin二级路由
import LoginWeiXin from '../containers/login/weixin'
import AboutUs from '../containers/login/aboutMe'
import ProfileDetail from '../containers/profile/profileDetail'
import Mistake from '../containers/profile/mistake'
const routes =[
  {
    path:'/login',
      exact:true,
      component:Login
  },
  {
    path:'/login/weixin',
      exact:true,
      component:LoginWeiXin
  },
  {
    path:'/login/aboutUs',
      exact:true,
      component:AboutUs
  },
  
  {
    path:'/home',
      exact:true,
      component:Home
  },
  {
    path:'/entry',
      exact:true,
      component:Entry
  },
  {
    path:'/profile',
      exact:true,
      component:Profile
  },
  {
    path:'/profile/profileDetail',
      exact:true,
      component:ProfileDetail
  },
  {
    path:'/profile/profileMistake',
      exact:true,
      component:Mistake
  },

  {
    path:'/shoppingcart',
      exact:true,
      component:ShoppingCart
  },
  {
    path: '/shopdetail',
    component: ShopDetail
  }
]


export default routes
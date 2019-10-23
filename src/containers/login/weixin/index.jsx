import React, { Component } from 'react'
import './less/index.less'
class LoginWeiXin extends Component {
  state = {

  }
  render() {
    return (

      <div className='weixin-warp'>
        <div className='weixin-header'>
          <div className='header-left'>
            <div className='header-img'>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571569289133&di=714663af708108d98109ca74b465b8a3&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180802%2F03%2F1533152915-shpbackeXE.jpg" alt="" />
              <h1 className='header-title'>微信</h1>
            </div>

          </div>
          <div className='header-right'><p>快捷登录</p></div>
        </div>
        <div className='weixin-containt'>
          <div className="container-center">
            <div className='text'> 登录后，微信将与该网站共享您的登录名。</div>
            <div className='image'></div>
          </div>
        </div>
        <div className='weixin-footer'>
          <div>关于微信</div>
          <div>联系我们</div>
          <div>联系电话：13706387374</div>
        </div>
      </div>
    )
  }
}
export default LoginWeiXin
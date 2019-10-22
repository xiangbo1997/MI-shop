import React, { Component } from 'react'
//引入所需要antd-mobile组件
import { List, InputItem, WhiteSpace, Button,Toast } from 'antd-mobile';
//引入less样式
import './less/index.less'
//引入react-router
import {Link} from 'react-router-dom'
import routes from '../../config/routes'
import { createForm } from 'rc-form';
@createForm()
class Login extends Component {

//状态数据


  state = {
    toogleText: true,
    hasError: false,
    value: '',
    phone:'',
    code:0,
    username:'',
    password:''
  }
  //切换繁体
  changeComplexFont = () => {
    this.setState({
      toogleText: false
    })

  }
  //切换简体
  changeSimplifiled = () => {
    this.setState({
      toogleText: true
    })
  }


// 表单校验
//点击报错图标触发的函数(高阶函数方便复用)
onErrorClick = (e) => {
  return()=>{
    console.log(e)
    if (this.state.hasError) {
      Toast.info(`请输入正确的${e}`);
    }
  }
 
  
}
//input框变化时的触发事件
onChange = (value) => {
  // if()
  const reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
  console.log()
  if (!reg.test(value)) {
    this.setState({
      hasError: true,
    });
  } else {
    this.setState({
      hasError: false,
    });
  }
  this.setState({
    value,
  });
}






  render() {
    const { getFieldProps } = this.props.form;


    


    return (
      
      <div className="login-warp">
        <div className="login-header">
          <div className='logol-img'></div>
          <h4 className="login-text">{this.state.toogleText?'小米账号登录':'小米帳號登入'}</h4>
        </div>
        <List >

          <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder={this.state.toogleText?'手机号码':'手機號碼'}
            // ref={el => this.autoFocusInst = el}
            error={this.state.hasError}
            onErrorClick={this.onErrorClick('手机号码')}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('focus')}
            clear
            placeholder={this.state.toogleText?'短信验证码':'短信驗證碼'} 
            ref={el => this.inputRef = el}

          >{this.state.toogleText?'短信验证':'短信驗證'}  </InputItem>

          <Button id="get-code" type="gohost">{this.state.toogleText?'获取验证码':'獲取驗證碼'}</Button>
        </List>
        <div className="login-methods">
          <Button type='primary' className='login-btn'>{this.state.toogleText?'立即登入/注册':'立即登入/注冊'}</Button>
          <Button className='login-btn'>{this.state.toogleText?'用户名密码登录':'用戶名密碼登入'}</Button>
        </div>
        <div className='login-footer'>
          {/* <hr/> */}
          <p className='login-others'>其他登录方式</p>
          <div className='icon-img'>
            <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Ddd573c3463d4d9a98ab342baf6e9459a">
              <div className="zhifubao"></div>
            </a>
              <Link to='/login/weixin'>
              <div className='weixin'></div>
              </Link>
           
            <a href="https://api.weibo.com/oauth2/authorize?response_type=code&client_id=2996826273&redirect_uri=https://sns.account.xiaomi.com/pass/sns/login/load&state=STATE_055768">
              <div className="xinlang"></div>
            </a>

          </div>
          <ul className='other-text'>

            <li onClick={this.changeSimplifiled} > <a href="javescript:;">简体</a></li>
            <li onClick={this.changeComplexFont}> <a href="javescript:;">繁体</a></li>
            <li> <Link to='/login/aboutUs'>开心一刻</Link></li>
            <li> <a href="https://static.account.xiaomi.com/html/faq/zh_TW/faqList.html">{this.state.toogleText?'常见问题':'常見問題'}</a></li>
            <li> <a href="https://static.account.xiaomi.com/html/privacy/account/zh_TW.html">{this.state.toogleText?'隐私政策':'隱私政策'}</a></li>
          </ul>
          
        </div>






      </div>
    )
  }
}

export default Login;
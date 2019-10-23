import React, { Component } from 'react'
//引入所需要antd-mobile组件
import { List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
//引入less样式
import './less/index.less'
//引入react-router
import { Link } from 'react-router-dom'
import routes from '../../config/routes'
import { createForm } from 'rc-form';
import method from '../../util';
let { showOrHidden } = method
@createForm()
class Login extends Component {

  //状态数据


  state = {
    toogleText: true,
    
    phone: '',
    code: 0,
    username: '',
    password: '',
    isPhone: true,
    shyTime:10,
    isNumber:false,
    isDisable:false,//按钮是否可以点击
    isComplex:false,
    valuePhone:{
      hasError: false,
      value: '',
    },
    valueCode:{
      hasError: false,
      value: '',
    },
    valueUserName:{
      hasError: false,
      value: '',
    },
    valuePassword:{
      hasError: false,
      value: '',
    }
    

  }
  //切换繁体
  changeComplexFont = () => {
    this.setState({
      toogleText: false,
      isComplex:true
    })

  }
  componentDidUpdate(){
    showOrHidden(this, !this.state.isComplex, 'btn2')
    showOrHidden(this, this.state.isComplex, 'btn1')
  }
  //切换简体
  changeSimplifiled = () => {
    this.setState({
      toogleText: true,
      isComplex:false

    })
  }


  // 表单校验
  //点击报错图标触发的函数(高阶函数方便复用)
  onErrorClick = (e) => {
    return () => {
      console.log(e)
      
      if(e==='手机号码'){
        if (this.state.valuePhone.hasError) {
         
          Toast.info(`请输入正确的${e}`);
        }else{
          this.setState({isDisable:false})
        }

      }
      if(e==='短信验证码'){
        if (this.state.valueCode.hasError) {
          Toast.info(`请输入正确的${e}`);
        }

      }
      if(e==='用户名'){
        if (this.state.valueUserName.hasError) {
          Toast.info(`请输入正确的${e}`);
        }

      }
      if(e==='密码'){
        if (this.state.valuePassword.hasError) {
          Toast.info(`请输入正确的${e}`);
        }

      }
      
    }


  }
 
  // 高阶函数，表单校验

 onChange = (userInfo  ) => {
   //手机号
    return(value)=>{
  
      if(userInfo==='phone'){
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
        console.log(value,'------')
        if (!reg.test(value)) {
          console.log('成功')
          this.setState({
            valuePhone:{
              hasError: true,
              value,
              
            },
            isDisable:true
           
          });
        } else {
          console.log('错误')
          this.setState({
            valuePhone:{
              hasError: false,
              value,
             
            },
            isDisable:false
          });
        }
        
      }
    //  验证码
       if(userInfo==='code'){
        const reg = /^\d{6}$/
       
        console.log(value,'------')
        if (!reg.test(value)) {
          console.log('成功')
          this.setState({
            valueCode:{
              hasError: true,
              value,
            },
           
          });
        } else {
          console.log('错误')
          this.setState({
            valueCode:{
              hasError: false,
              value,
            },
          });
        }
  
       }
       //用户名
       if(userInfo==='userName'){
        const reg = /^[a-zA-Z0-9_-]{4,16}$/
       
        console.log(value,'------')
        if (!reg.test(value)) {
          console.log('成功')
          this.setState({
            valueUserName:{
              hasError: true,
              value,
            },
           
          });
        } else {
          console.log('错误')
          this.setState({
            valueUserName:{
              hasError: false,
              value,
            },
          });
        }
  
      }
      // 密码
       if(userInfo==='password'){
        const reg = /^\d{8,}$/
       
        console.log(value,'------')
        if (!reg.test(value)) {
          console.log('成功')
          this.setState({
            valuePassword:{
              hasError: true,
              value,
            },
           
          });
        } else {
          console.log('错误')
          this.setState({
            valuePassword:{
              hasError: false,
              value,
            },
          });
        }
  
  
      }
  
       }
      
    }
    
    
   






  //登陆方式切换
  goToLoginUser = () => {
   
    const { isPhone } = this.state
    // this.props.history.push('/login/loginUser')
    this.setState({
      isPhone: !isPhone
    })
    if (!isPhone) {
      showOrHidden(this, isPhone, 'phone')
      showOrHidden(this, !isPhone, 'username')
    } else {
      showOrHidden(this, isPhone, 'phone')
      showOrHidden(this, !isPhone, 'username')
    }
   

  }

  sendCode=()=>{
    Toast.info('验证码发送成功');
//发送验证码
    // 间隔时间
    const time=10
    let {shyTime,}= this.state
    this.setState({
      isNumber:true,
      isDisable:true
    })
    this.timeid = setInterval(()=>{
      shyTime--
      // console.log(shyTime)
      this.setState({
        shyTime:shyTime
      })
      if(shyTime<1){  
        console.log('关闭')
        clearInterval( this.timeid)
        this.setState({
          shyTime:time,
          isDisable:false,
          isNumber:false
        })

      }
      
    },500)
   

  }
  componentDidMount() {
    const { isPhone } = this.state
    showOrHidden(this, !isPhone, 'phone')
    showOrHidden(this, isPhone, 'username')
    showOrHidden(this, !this.state.isComplex, 'btn2')
    showOrHidden(this, this.state.isComplex, 'btn1')
  }






  render() {
    const { getFieldProps } = this.props.form;





    return (

      <div className="login-warp">
        <div className="login-header">
          <div className='logol-img'></div>
          <h4 className="login-text">{this.state.toogleText ? '小米账号登录' : '小米帳號登入'}</h4>
        </div>
        <div className='phone' ref='phone'>
          <List >

            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder={this.state.toogleText ? '手机号码' : '手機號碼'}
              // ref={el => this.autoFocusInst = el}
              error={this.state.valuePhone.hasError}
              onErrorClick={this.onErrorClick('手机号码')}
              onChange={this.onChange('phone')}
              value={this.state.valuePhone.value}
            >手机号码</InputItem>
            <InputItem
              {...getFieldProps('focus')}
              clear
              placeholder={this.state.toogleText ? '短信验证码' : '短信驗證碼'}
              onErrorClick={this.onErrorClick('短信验证码')}
              ref={el => this.inputRef = el}
              error={this.state.valueCode.hasError}
              onChange={this.onChange('code')}
              value={this.state.valueCode.value}
            >{this.state.toogleText ? '短信验证' : '短信驗證'}  </InputItem>

            <button id="get-code" ref='btn1'disabled={this.state.isDisable} onClick={this.sendCode}>{this.state.isNumber?this.state.shyTime:'获取验证码'}</button>
            <button id="get-code" ref='btn2' disabled={this.state.isDisable} onClick={this.sendCode} >{this.state.isNumber?this.state.shyTime:'獲取驗證碼'}</button>
          </List>
        </div>
        <div className="username" ref='username'>
          <List >

            <InputItem
              {...getFieldProps('autofocus')}
              clear
              placeholder={this.state.toogleText ? '用户名' : '手機號碼'}
              // ref={el => this.autoFocusInst = el}
              error={this.state.valueUserName.hasError}
              onErrorClick={this.onErrorClick('用户名')}
              onChange={this.onChange('userName')}
              value={this.state.valueUserName.value}
            >用户名</InputItem>
            <InputItem
              {...getFieldProps('focus')}
              clear
              placeholder={this.state.toogleText ? '密码' : '密碼'}
              error={this.state.valuePassword.hasError}
              onErrorClick={this.onErrorClick('密码')}
              ref={el => this.inputRef = el}
              onChange={this.onChange('password')}
              value={this.state.valuePassword.value}
            >{this.state.toogleText ? '密码' : '密碼'}  </InputItem>

           
          </List>
        </div>

        <div className="login-methods">
          <Button type='primary' className='login-btn'>{this.state.toogleText ? '立即登入/注册' : '立即登入/注冊'}</Button>
          <Button className='login-btn' onClick={this.goToLoginUser}>{this.state.toogleText ? '用户名密码登录' : '用戶名密碼登入'}</Button>
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
            <li> <a href="https://static.account.xiaomi.com/html/faq/zh_TW/faqList.html">{this.state.toogleText ? '常见问题' : '常見問題'}</a></li>
            <li> <a href="https://static.account.xiaomi.com/html/privacy/account/zh_TW.html">{this.state.toogleText ? '隐私政策' : '隱私政策'}</a></li>
          </ul>

        </div>






      </div>
    )
  }
}

export default Login;
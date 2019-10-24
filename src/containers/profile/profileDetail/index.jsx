import React, { Component } from 'react'
import './less/index.less'

import { Picker, List, WhiteSpace, Button, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
// import { Modal, , WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import {updateUserInfo,removeUserInfo,updateDistrict} from '../../../redux/action-creators'
import { district, provinceLite } from 'antd-mobile-demo-data';
import { connect } from 'react-redux';
import method from '../../../util'
const { showOrHidden } = method
const alert = Modal.alert;
@connect(
  (state) => ({user: state.user}),
  { updateUserInfo,removeUserInfo,updateDistrict}
)
@createForm()
class profileDetail extends Component {
  state = {
    district: [],
    username: '',
    password: '',
    isShow: true,
    
  }
  //存储收货地址
  saveDestrict = (district) => {
    // let data = { district }
    
    let arr = district
    
   
    this.props.updateDistrict(arr)


  }
  componentDidMount(){

      this.saveDestrict()
  }
  //切换密码明文
  changShow = () => {
    let { text1 } = this.refs
    console.log()
    this.setState({
      isShow: !this.state.isShow
    })
    let { isShow } = this.state
    if (isShow) {
      console.log(text1)
      text1.type = 'text'
      console.log(11111)
    } else {
      text1.type = 'password'
    }
  }
  //存储用户名和密码
  clickHandler = (e) => {
    return () => {
      let { text1, username } = this.refs
      if (e === 'username') {
        this.setState({
          username: username.value.trim()

        })
      } else {
        this.setState({
          password: text1.value.trim()
        })
      }
      console.log(this.state.username, this.state.password)
    }
  }
componentDidMount(){
 
  
  this.setState({
    username:this.props.user.username,
    password:this.props.user.password 
  })
 
  console.log()
}

  // }
  render() {
    const { getFieldProps } = this.props.form;
    return (

      <div className='app'>
        <h1>个人信息</h1>
        <ul>
          <li>
            <div className="container-left"> <i className="iconfont icon-user"></i></div>


            用户名：<input type="text" ref='username' value={this.state.username} onChange={this.clickHandler('username')} />
          </li>
          <li>
            <div className="container-left"> <i className="iconfont icon-daifukuan"></i></div>
            密码： <input type="password" value={this.state.password} ref='text1' onChange={this.clickHandler('password')} />

            <i className='iconfont icon-jia isShow' onClick={this.changShow} ></i>
          </li>
          <li>
            <div className="container-left">
             
              <Button
              className='update'
                onClick={() =>
                  alert('修改', '确认修改吗', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    { text: '确认', onPress: () => this.props.updateUserInfo({username:this.state.username,password:this.state.password}) },
                  ])
                }
              >
                <i className='iconfont icon-shezhi1 ' ></i>
    </Button>

             
              <Button
              className='update'
                onClick={() =>
                  alert('退出', '确认退出登录吗', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    { text: '确认', onPress: () => {
                      this.props.removeUserInfo({})
                       this.props.history.replace('/home')}},
                  ])
                }
              >
                退出登录
    </Button>

              <WhiteSpace size="lg" />


            </div>
          </li>
        </ul>
        <List style={{ backgroundColor: 'white' }} className="picker-list">
          <Picker extra="请选择(可选)"
            data={district}
            title="Areas"
            {...getFieldProps('district', {
              initialValue: ['340000', '341500', '341502'],
            })}
            onOk={this.saveDestrict}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">收货地址</List.Item>
          </Picker>






        </List>
      </div>
    );

  }


}

export default profileDetail
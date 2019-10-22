import React, { Component } from 'react'
import './less/index.less'

import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

import { district, provinceLite } from 'antd-mobile-demo-data';
import  method from '../../../util'
const {showOrHidden} =method

@createForm()
class profileDetail extends Component {
  state={
    district:[],
    userName:'',
    password:'',
    isShow:true,
    password:'',
    username:''
  }
  //存储收货地址
  saveDestrict=(e)=>{
let data ={district}
    console.log('存储数据',e)
    this.setState({
      district:e
    })
    console.log(data)

  }
  //切换密码明文
  changShow=()=>{
    let {text1} = this.refs
    console.log()
      this.setState({
        isShow:!this.state.isShow
      })
      let {isShow} =this.state
      if(isShow){
        console.log(text1)
        text1.type='text'
        console.log(11111)
      }else{
        text1.type='password'
      }
  }
 //存储用户名和密码
  clickHandler=(e)=>{
    return ()=>{
      let {text1,username} = this.refs
      if(e==='userName'){
        this.setState({
          username:username.value.trim()
         
        })
      }else{
        this.setState({
          password:text1.value.trim()
        })
      }
       console.log(this.state.username,this.state.password)
    }
  }


  // }
  render(){
    const { getFieldProps } = this.props.form;
    return (
      
      <div className='app'>
        <h1>个人信息</h1>
        <ul>
            <li>
              <div className="container-left"> <i className="iconfont icon-user"></i></div>
              
                
                用户名：<input type="text" ref='username' onChange={this.clickHandler('userName')}/>
            </li>
            <li>
            <div className="container-left"> <i className="iconfont icon-daifukuan"></i></div>
               密码： <input type="password" ref='text1'  onChange={this.clickHandler('password')}/> 
         
              <i className='iconfont icon-youhui isShow' onClick={this.changShow} ></i>
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
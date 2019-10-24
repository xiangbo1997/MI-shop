import React, { Component } from 'react';
import  './index.less';
import store from '../../redux/store';
import {Link} from 'react-router-dom';
import { Modal, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const alert = Modal.alert;
const prompt = Modal.prompt;
class GoBuytoComputed extends Component {
    constructor(props){
        super(props)
        this.state={
            showView:false
        }
    }
    showAlert = () => {
        const alertInstance = alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
            { text: 'OK', onPress: () => console.log('ok') },
        ]);
        // setTimeout(() => {
        //     // 可以调用close方法以在外部close
        //     console.log('auto close');
        //     alertInstance.close();
        // }, 500000);
    };
    goBuy(){
        
    }
    componentDidMount(){
      
    }
    render() {
        // this.setState({
        //     showView: !this.state.showView
        // })
        const { shops} = store.getState()
        // console.log(this.props)
        // console.log(shops)
        // const number = shops.reduce((prev,now)=>{
        //     return prev.num?prev.num:0 + now.num
        // },0)
        // console.log(number)
        return (
            <div className='GoBuytoComputed' >
                <div className="all-price">
                    <span>共{shops.length}件  金额：</span>
                    <span className="price">{this.props.allprice ? this.props.allprice : 0}元</span>
                </div>
                <Link to="/entry" className="continue-bug">
                    继续购物
                </Link>
                <div className="computed" onClick={this.goBuy}>
                    去结算

                </div>
            </div>
        )
    }
}

export default GoBuytoComputed;
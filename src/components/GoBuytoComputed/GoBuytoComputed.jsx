import React, { Component } from 'react';
import  './index.less';
class GoBuytoComputed extends Component {

    render() {

        return (
            <div className="GoBuytoComputed">
                <div className="all-price">
                    <span>共3件  金额：</span>
                    <span className="price">2097元</span>
                </div>
                <div className="continue-bug">
                    继续购物
                </div>
                <div className="computed">
                    去结算
                </div>
            </div>
        )
    }
}

export default GoBuytoComputed;
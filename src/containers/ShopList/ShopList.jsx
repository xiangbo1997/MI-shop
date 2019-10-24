import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './index.less';

import {withRouter}from 'react-router-dom'
@withRouter
class ShopList extends Component {

    render() {

        return (
            <div>
                <Link to="/shopdetail" className="shop-list">
                    <li className="shop-item">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
                        <div className="desc">Redmi 8A 3GB+32GB</div>
                        <div className="price">￥699</div>
                    </li>
                    <li className="shop-item">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
                        <div className="desc">Redmi 8A 3GB+32GB</div>
                        <div className="price">￥699</div>
                    </li>
                    <li className="shop-item">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
                        <div className="desc">Redmi 8A 3GB+32GB</div>
                        <div className="price">￥699</div>
                    </li>
                    <li className="shop-item">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&w=360&h=360" alt="" />
                        <div className="desc">Redmi 8A 3GB+32GB</div>
                        <div className="price">￥699</div>
                    </li>
                </Link>
            </div>
        )
    }
}

export default ShopList;






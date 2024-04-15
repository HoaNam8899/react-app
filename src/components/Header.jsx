import React from 'react'
import { useNavigate } from 'react-router-dom'
import transCurrency from '../../public/const/transCurency';
export const Header = () => {
    const navigate = useNavigate();
    const hanldeCart = (e) => {
        e.preventDefault();
        navigate('/cart');
    }

    const hanldeShop = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const hanldeLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const hanldeRegister = (e) => {
        e.preventDefault();
        navigate('/register');
    }
    return (
        <>
            <div id="header">
                <div className="navbar d-flex align-items-center px-5">
                    <div className="logo">
                        <img src="./images/logo2s.jpg" alt="" onClick={(e) => hanldeShop(e)} />
                    </div>
                    <div className="nav d-flex flex-column align-items-center">
                        <div className="nav-intro">
                            <h4>Chào mừng đến với cửa hàng của chúng tôi</h4>
                        </div>
                        <div className="search-product d-flex flex-row align-items-center justify-content-between">
                            <i className="bi bi-search" />
                            <input type="text" placeholder="Tìm kiếm sản phẩm..." className="search-product_input" />
                        </div>
                    </div>
                    <div className="user d-flex align-items-center justify-content-between">
                        <img className="img-user" src="./images/user.png" alt="" />
                        <p>Username</p>
                        <a className="display-none login" onClick={(e) => hanldeLogin(e)}>Login</a>
                        <a className="display-none regis" onClick={(e) => hanldeRegister(e)}>Register</a>
                        <i className="bi bi-cart cart-icon">
                            <span>5</span>
                            <div className="mini-cart d-flex flex-column justify-content-between">
                                <div className="mini-cart_items">
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, temporibus?</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                    <div className="item d-flex align-items-center justify-content-between">
                                        <img src="./images//carot.jpg" alt="" />
                                        <div className="item-content">
                                            <h5 className="item-name">Táo nhập khẩu</h5>
                                            <div className="item-qty d-flex align-items-center">
                                                <h6>-</h6>
                                                <h6>2</h6>
                                                <h6>+</h6>
                                            </div>
                                        </div>
                                        <h5>x</h5>
                                    </div>
                                </div>
                                <div className="mini-cart_view d-flex align-items-end justify-content-between">
                                    <h6>Tổng tiền: {transCurrency(150000)}</h6>
                                    <button className="btn btn-primary" onClick={(e) => hanldeCart(e)}>Xem giỏ hàng</button>
                                </div>
                            </div>
                        </i>
                    </div>
                </div>
            </div>

        </>
    )
}

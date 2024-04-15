import React from 'react'
import { useNavigate } from 'react-router-dom'
import transCurrency from '../../public/const/transCurency';
export const CheckOut = () => {
    const navigate = useNavigate();
    const hanldeCart = (e) => {
        e.preventDefault();
        navigate('/cart');
    }
    const handleOrders = (e) => {
        e.preventDefault();
        navigate('/orders')
    }
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="user-info">
                                    <h3>Điền thông tin</h3>
                                    <form action>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="receive_name">Tên người nhận</label>
                                            <input type="text" id="receive_name" name="receive_name" placeholder="nhập tên" required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="receive_phone">Số điện thoại</label>
                                            <input type="tel" id="receive_phone" name="receive_phone" pattern="[0-9]{10}" placeholder="0123-456-789" required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="receive_address">Địa chỉ</label>
                                            <input type="text" id="receive_address" name="receive_address" placeholder="nhập địa chỉ" required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="note">Ghi chú</label>
                                            <input type="text" id="note" name="note" placeholder="..." required />
                                        </div>
                                        <button type="submit" className="btn btn-success me-1" onClick={(e) => handleOrders(e)}>Đặt hàng</button>
                                        <button type="button" className="btn btn-success" onClick={(e) => hanldeCart(e)}>Giỏ hàng</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="products-info">
                                    <h3>Thông tin sản phẩm</h3>
                                    <div className="products-info-items">
                                        <div className="products-info-item">
                                            <span>Cá</span>
                                            <span>x2</span>
                                            <span>:</span>
                                            <span>{transCurrency(25000)}</span>
                                        </div>
                                        <div className="products-info-item">
                                            <span>Cá</span>
                                            <span>x2</span>
                                            <span>:</span>
                                            <span>{transCurrency(25000)}</span>
                                        </div>
                                        <div className="products-info-item">
                                            <span>Cá</span>
                                            <span>x2</span>
                                            <span>:</span>
                                            <span>{transCurrency(25000)}</span>
                                        </div>
                                    </div>
                                    <div className="products-info-total">
                                        <h5>Tổng: {transCurrency(75000)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

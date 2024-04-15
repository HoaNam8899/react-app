import React from 'react'
import { useNavigate } from 'react-router-dom'
import transCurrency from '../../public/const/transCurency';
export const Cart = () => {
    const navigate = useNavigate();
    const hanldeCheckOut = (e) => {
        e.preventDefault();
        navigate('/checkout');
    }
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="cart-product">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td style={{ width: '15%' }}>Ảnh</td>
                                                <td style={{ width: '20%' }}>Tên sản phẩm</td>
                                                <td style={{ width: '20%' }}>Số lượng</td>
                                                <td style={{ width: '15%' }}>Giá</td>
                                                <td style={{ width: '15%' }}>Tổng cộng</td>
                                                <td style={{ width: '15%' }}>Hành động</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="./images//carot.jpg" alt="" />
                                                </td>
                                                <td>Cà rốt</td>
                                                <td className="cart-qty">
                                                    <button className="btn">-</button>
                                                    20
                                                    <button className="btn">+</button>
                                                </td>
                                                <td>{transCurrency(20000)} <br />
                                                </td>
                                                <td>{transCurrency(40000)}</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="./images//carot.jpg" alt="" />
                                                </td>
                                                <td>Cà rốt</td>
                                                <td className="cart-qty">
                                                    <button className="btn">-</button>
                                                    20
                                                    <button className="btn">+</button>
                                                </td>
                                                <td>{transCurrency(20000)} <br />
                                                </td>
                                                <td>{transCurrency(40000)}</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="./images//carot.jpg" alt="" />
                                                </td>
                                                <td>Cà rốt</td>
                                                <td className="cart-qty">
                                                    <button className="btn">-</button>
                                                    20
                                                    <button className="btn">+</button>
                                                </td>
                                                <td>20000đ <br />
                                                </td>
                                                <td>400000đ</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="./images//carot.jpg" alt="" />
                                                </td>
                                                <td>Cà rốt</td>
                                                <td className="cart-qty">
                                                    <button className="btn">-</button>
                                                    20
                                                    <button className="btn">+</button>
                                                </td>
                                                <td>{transCurrency(20000)} <br />
                                                </td>
                                                <td>{transCurrency(40000)}</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src="./images//carot.jpg" alt="" />
                                                </td>
                                                <td>Cà rốt</td>
                                                <td className="cart-qty">
                                                    <button className="btn">-</button>
                                                    20
                                                    <button className="btn">+</button>
                                                </td>
                                                <td>{transCurrency(20000)} <br />
                                                </td>
                                                <td>{transCurrency(40000)}</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* pagination */}
                                <div className="product-pagination mt-3">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* pagination */}
                            </div>
                            <div className="col-xl-4">
                                <div className="cart-total">
                                    <div>
                                        <p>Tiền sản phẩm: {transCurrency(400000)}</p>
                                        <p>Tiền ship: {transCurrency(10000)}</p>
                                    </div>
                                    <div>
                                        <p>Tổng cộng: {transCurrency(410000)}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-success" onClick={(e) => hanldeCheckOut(e)}>Đặt hàng</button>
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

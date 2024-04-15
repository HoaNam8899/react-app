import React from 'react'
import transCurrency from '../../public/const/transCurency'

export const Orders = () => {
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="orders-text">
                                    <h1>Đơn hàng</h1>
                                </div>
                                <div className="orders">
                                    <table className="checkout-table table">
                                        <thead>
                                            <tr>
                                                <td style={{ width: '25%' }}>Mã đơn hàng</td>
                                                <td style={{ width: '15%' }}>Người nhận</td>
                                                <td style={{ width: '15%' }}>Trạng thái</td>
                                                <td style={{ width: '15%' }}>Thời gian tạo</td>
                                                <td style={{ width: '15%' }}>Tổng tiền</td>
                                                <td>Xem chi tiết</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1wdafwasaw</td>
                                                <td>Nam</td>
                                                <td>Đang giao</td>
                                                <td>4/3/2024</td>
                                                <td>{transCurrency(35000)}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                        Chi tiết
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1wdafwasaw</td>
                                                <td>Nam</td>
                                                <td>Đang giao</td>
                                                <td>4/3/2024</td>
                                                <td>{transCurrency(35000)}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                        Chi tiết
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1wdafwasaw</td>
                                                <td>Nam</td>
                                                <td>Đang giao</td>
                                                <td>4/3/2024</td>
                                                <td>{transCurrency(35000)}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                        Chi tiết
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1wdafwasaw</td>
                                                <td>Nam</td>
                                                <td>Đang giao</td>
                                                <td>4/3/2024</td>
                                                <td>{transCurrency(35000)}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                        Chi tiết
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1wdafwasaw</td>
                                                <td>Nam</td>
                                                <td>Đang giao</td>
                                                <td>4/3/2024</td>
                                                <td>{transCurrency(35000)}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                        Chi tiết
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* Button trigger modal */}
                                    {/* Modal */}
                                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLongTitle">Chi tiết đơn hàng</h5>
                                                    <button type="button" className="close btn btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="modal-item">
                                                        <div className="modal-address">
                                                            <p>Tên người nhận: Hỷ Hoa Nam</p>
                                                            <p>Địa chỉ: Bình Dương</p>
                                                            <p>Số điện thoại: 0999880099</p>
                                                            <p>Thời gian mua: 4/3/2024</p>
                                                            <p>Mã đơn: 123abc</p>
                                                            <p>Trạng thái: Đã giao</p>
                                                            <p>Ghi chú: gửi cẩn thận</p>
                                                        </div>
                                                        <div className="modal-products">
                                                            <div className="modal-product_item d-flex align-items-center">
                                                                <p>Cà rốt</p>
                                                                <p>x3</p>
                                                                <p>{transCurrency(20000)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="modal-total">
                                                            <p>Tổng tiền: {transCurrency(40000)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

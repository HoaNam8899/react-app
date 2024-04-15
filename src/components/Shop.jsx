import React from 'react'
import { useNavigate } from 'react-router-dom'
import transCurrency from '../../public/const/transCurency';
export const Shop = () => {
    const navigate = useNavigate();
    const handleDetails = (e) => {
        e.preventDefault();
        navigate('/details')
    }
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-3">
                                <div className="category-navbar">
                                    <div className="category-navbar_content">
                                        <h3>Danh mục</h3>
                                    </div>
                                    <div className="category">
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Rau, củ, quả</span>
                                        </div>
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Thịt,cá, hải sản</span>
                                        </div>
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Sữa</span>
                                        </div>
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Bánh,kẹo</span>
                                        </div>
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Mì gói, bún, cháo</span>
                                        </div>
                                        <div className="category-item d-flex align-items-center justify-content-between">
                                            <span>Kem, đồ đông lạnh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-12">
                                <div className="product-container">
                                    <div className="open-category">
                                        <button className="btn btn-primary open-category-btn">
                                            Danh mục
                                        </button>
                                    </div>
                                    <div className="product-list">
                                        <div className="product-list_sort">
                                            <div className="container">
                                                <div className="row row-cols-auto">
                                                    <span>Sản phẩm mới</span>
                                                    <span>Sản phẩm mới</span>
                                                    <span>Sản phẩm mới</span>
                                                    <span>Sản phẩm mới</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-items">
                                            <div className="row ">
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <div className="product-item">
                                                        <img src="./images/carot.jpg" alt="" />
                                                        <div className="product-item_name" onClick={(e) => handleDetails(e)}>
                                                            <p>Cà rốt nhập khẩu chất lượng cao Lorem ipsum dolor sit ame?</p>
                                                        </div>
                                                        <div className="product-item_price d-flex align-items-center">
                                                            Giá: {transCurrency(20000)}
                                                            <span><i><del>{transCurrency(5500)}</del></i></span>
                                                            <span>-33%</span>
                                                            {/* viết hàm tính giảm giá */}
                                                        </div>
                                                        <div className="product-item_stock">
                                                            <span>Số lượng còn: 1000</span>
                                                        </div>
                                                        <div className="product-item_buy">
                                                            <button className="btn btn-success">Mua</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <div className="product-item">
                                                        <img src="./images/carot.jpg" alt="" />
                                                        <div className="product-item_name" onClick={(e) => handleDetails(e)}>
                                                            <p>Cà rốt</p>
                                                        </div>
                                                        <div className="product-item_price">Giá: {transCurrency(20000)}</div>
                                                        <div className="product-item_stock">
                                                            <span>Số lượng còn: 1000</span>
                                                        </div>
                                                        <div className="product-item_buy">
                                                            <button className="btn btn-success" >Mua</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <div className="product-item">
                                                        <img src="./images/carot.jpg" alt="" />
                                                        <div className="product-item_name" onClick={(e) => handleDetails(e)}>
                                                            <p>Cà rốt</p>
                                                        </div>
                                                        <div className="product-item_price">Giá: {transCurrency(20000)}</div>
                                                        <div className="product-item_stock">
                                                            <span>Số lượng còn: 1000</span>
                                                        </div>
                                                        <div className="product-item_buy">
                                                            <button className="btn btn-success" >Mua</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                                                    <div className="product-item">
                                                        <img src="./images/carot.jpg" alt="" />
                                                        <div className="product-item_name" onClick={(e) => handleDetails(e)}>
                                                            <p>Cà rốt</p>
                                                        </div>
                                                        <div className="product-item_price">
                                                            Giá: {transCurrency(20000)}
                                                        </div>
                                                        <div className="product-item_stock">
                                                            <span>Số lượng còn: 1000</span>
                                                        </div>
                                                        <div className="product-item_buy">
                                                            <button className="btn btn-success">Mua</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                                    <div className="product-item">
                                                        <img src="./images/carot.jpg" alt="" />
                                                        <div className="product-item_name" onClick={(e) => handleDetails(e)}>
                                                            <p>Cà rốt</p>
                                                        </div>
                                                        <div className="product-item_price">Giá: {transCurrency(20000)}</div>
                                                        <div className="product-item_stock">
                                                            <span>Số lượng còn: 1000</span>
                                                        </div>
                                                        <div className="product-item_buy">
                                                            <button className="btn">Mua</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* pagination */}
                                    <div className="product-pagination">
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
            </div>

        </>
    )
}

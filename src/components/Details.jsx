import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Details = () => {
    const navigate = useNavigate();
    const handleShop = (e) => {
        e.preventDefault();
        navigate('/');
    }
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="detail-img">
                                    <img src="./images/carot.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <div className="detail-content">
                                    <p className="detail-name">Cà rốt</p>
                                    <p className="detail-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium reprehenderit fuga labore? Nesciunt consequatur quam cupiditate unde natus debitis.</p>
                                    <p className="detail-price">Giá: 20000đ</p>
                                    <div className="detail-button">
                                        <button className="btn btn-success" onClick={(e) => handleShop(e)}>Quay lại mua hàng</button>
                                        <button className="btn btn-success">Mua</button>
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

import React from 'react'

export const Register = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="login-form d-flex align-items-center justify-content-center">
                            <form action>
                                <h3>Đăng kí</h3>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" name="email" placeholder="Nhập email" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="username">Tên tài khoản</label>
                                    <input type="text" id="username" name="username" placeholder="Tên tài khoản" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="fullname">Họ tên</label>
                                    <input type="text" id="fullname" name="fullname" placeholder="nhập họ tên" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="phone">Số điện thoại</label>
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0123-456-789" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="address">Địa chỉ</label>
                                    <input type="text" id="address" name="address" placeholder="nhập địa chỉ" required />
                                </div>
                                <button type="submit" className="btn btn-success">Đăng kí</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

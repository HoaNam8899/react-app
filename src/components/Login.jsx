import React from 'react'

export const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="login-form d-flex align-items-center justify-content-center">
                            <form action>
                                <h3>Đăng nhập</h3>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder="nhập email" required />
                                </div>
                                <div className="form-item d-flex flex-column">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id="password" placeholder="nhập mật khẩu" required />
                                </div>
                                <div className="form-check d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center save-acc">
                                        <input type="checkbox" />
                                        <p>Lưu tài khoản.</p>
                                    </div>
                                    <a>Quên mật khẩu.</a>
                                </div>
                                <button type="submit" className="btn btn-success">Đăng nhập</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

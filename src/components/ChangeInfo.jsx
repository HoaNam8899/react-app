import React from 'react'

export const ChangeInfo = () => {
    return (
        <>
            <div id="body">
                <div className="body-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="user-info">
                                    <h3>Thông tin</h3>
                                    <form action>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="username">Tên người dùng</label>
                                            <input type="text" id="username" name="username" placeholder="..." required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="fullname">Họ tên</label>
                                            <input type="text" id="fullname" name="fullname" placeholder="..." required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="phone">Số điện thoại</label>
                                            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="..." required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="address">Địa chỉ</label>
                                            <input type="text" id="address" name="address" placeholder="..." required />
                                        </div>
                                        <button type="submit" className="btn btn-success">Thay đổi</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="user-info mt-4">
                                    <h3>Đổi mật khẩu</h3>
                                    <form action>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="newPassword">Mật khẩu mới</label>
                                            <input type="password" id="newPassword" name="newPassword" placeholder="..." required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="confirmPassword">Nhập lại mật khẩu mới để xác nhận</label>
                                            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="..." required />
                                        </div>
                                        <div className="form-item d-flex flex-column">
                                            <label htmlFor="oldPassword">Mật khẩu cũ</label>
                                            <input type="password" id="oldPassword" name="oldPassword" placeholder="..." required />
                                        </div>
                                        <div>
                                            <p>
                                                lưu ý: mật khẩu phải tối thiểu 8 kí tự và tối đa 20 kí tự
                                            </p>
                                        </div>
                                        <button type="submit" className="btn btn-success">Thay đổi</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

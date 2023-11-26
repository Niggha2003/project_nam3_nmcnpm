import './style_changepassword.css';
import HeaderFooter from '../../layout/Header_Footer';

function user_changepassword() {
    const user_changepassword = document.createElement('div');
    user_changepassword.className = 'body__user_changepassword';

    user_changepassword.innerHTML = `
            <div id="container">
                <div class="welcome_text">
                    <div class="username_background">
                        <h2 class="username_text">
                            Hello, User Name
                        </h2>
                    </div>
                </div>

                <div class="user_info">
                    <div class="user_info_kind user_info_kind--separate">
                        <p>Thành viên</p>
                        <p>Loại thành viên</p>
                        <p>Tổng chi tiêu tích lũy với vật cản:</p>
                        <p>0 VND</p>
                        <p>Chi phí tối thiểu để lên hạng:</p>
                        <p>1.000.000 VND</p>
                        <p>Mức chi tiêu tối thiểu cần có trong năm để giữ hạng</p>
                        <p>Thành viên:</p>
                        <p>0 VND</p>
                        <p>Ưu đãi cho:</p>
                        <p>Thành viên</p>
                        <div class="line11"></div>
                        <ul class="uudai_list">
                            <li>Ưu đãi 1</li>
                            <li>Ưu đãi 2</li>
                            <li>Ưu đãi 3</li>
                        </ul>
                    </div>

                    <div class="user_info_level">
                        <svg class = "thanhvien_circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#EA4B4B"/>
                        </svg>
                        
                        
                        <svg class = "bac_circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                        </svg>

                        
                        <svg class="vang_circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                        </svg>
                        
                        
                        <svg class="bachkim_circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                        </svg>
                        
                        <div class="level_line1"></div>
                        <div class="level_line2"></div>
                        <div class="level_line3"></div>
                        <div class="level_line4"></div>

                        
                        <svg class="kimcuong_circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
                        </svg>

                        <p class="thanhvien_p">Thành viên</p>
                        <p class="bac_p">Bạc</p>
                        <p class="vang_p">Vàng</p>
                        <p class="bachkim_p">Bạch kim</p>
                        <p class="kimcuong_p">Kim cương</p>
                    </div>


                    <div class="user_modify">
                        <div class="user_modify_option">
                        <a class="thongtin_a" href="./user.html">Thông tin tài khoản</a>
                        <a class="donhang_a" href="./user_donmua.html">Đơn hàng của tôi</a>
                        <a class="doimk_a" href="./user_changepassword.html">Đổi mật khẩu</a>
                        <a class="dangxuat_a" href="">Đăng xuất</a>
                        </div>

                        <!-- modify frame -->
                        <div class="user_modify_frame">
                            <p class="datmkmoi_p">
                                ĐẶT MẬT KHẨU MỚI
                            </p>

                            <div class="matkhau_hientai">
                                <input type="text" class="user_mkht" placeholder="Mật khẩu hiện tại"></input>
                            </div>

                            <div class="matkhau_new">
                                <input type="text" class="user_newpassword" placeholder="Nhập mật khẩu mới">
                                    
                                </input>
                            </div>

                            <div class="matkhau_confirm">
                                <input type="text" class="user_confirmpassword" placeholder="Nhập lại mật khẩu mới">
                                </input>
                            </div>
                        </div>

                        <button class="user_modify_button">
                            <p>Xác nhận</p>
                        </button>

                        <div class="passwordchange_notify">
                            <p class="notify_change">Trạng thái đổi mật khẩu</p>
                        </div>
                    </div>
                </div>
            </div>
    `;

    return user_changepassword;
}



document.body.appendChild(HeaderFooter(user_changepassword));
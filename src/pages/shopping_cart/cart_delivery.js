import './cart_style.css';
import HeaderFooter from '../../layout/Header_Footer';

function cart_delivery() {
    const cart_delivery = document.createElement('div');
    cart_delivery.className = 'body__cart-delivery';

    cart_delivery.innerHTML = `
    <section class="delivery">
    <div class="container">
        <div class="delivery-top-wrap">
            <div class="delivery-top">
                <div class="delivery-top-cart delivery-top-item">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="delivery-top-adress delivery-top-item">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="delivery-top-payment delivery-top-item">
                    <i class="fas fa-money-check-alt"></i>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="delivery-content">
            <div class="delivery-content-left">
                <p>Vui lòng chọn địa chỉ giao hàng</p>
    
                <div class="delivery-content-left-dangnhap row">
                    <i class="fas fa-sign-in-alt"></i>
                    <p>Đăng nhập (nếu bạn đã có tài khoản)</p>
                </div>
    
                <div class="delivery-content-left-khachle row">
                    <input checked name="loaikhach" type="radio">
                    <p><span style="font-weight: bold;">Khách lẻ</span> (Nếu bạn không muốn lưu lại thông tin)</p>
                </div>
    
                <div class="delivery-content-left-dangky row">
                    <input name="loaikhach" type="radio">
                    <p><span style="font-weight: bold;">Đăng ký</span> (Tạo mới tài khoản với thông tin bên dưới)</p>
                </div>
    
                <div class="delivery-content-left-input-top row">
                    <div class="delivery-content-left-input-top-item">
                        <label for="hoTen">Họ Tên <span style="color: red;">*</span></label>
                        <input type="text" id="hoTen">
                    </div>
    
                    <div class="delivery-content-left-input-top-item">
                        <label for="dienThoai">Điện thoại <span style="color: red;">*</span></label>
                        <input type="text" id="dienThoai">
                    </div>
    
                    <div class="delivery-content-left-input-top-item">
                        <label for="tinhTp">Tỉnh/Tp <span style="color: red;">*</span></label>
                        <input type="text" id="tinhTp">
                    </div>
    
                    <div class="delivery-content-left-input-top-item">
                        <label for="quanHuyen">Quận/Huyện <span style="color: red;">*</span></label>
                        <input type="text" id="quanHuyen">
                    </div>
                </div>
    
                <div class="delivery-content-left-input-bottom">
                    <label for="diaChi">Địa chỉ <span style="color: red;">*</span></label>
                    <input type="text" id="diaChi">
                </div>
    
                <div class="delivery-content-left-button row">
                    <a href="./shopping_cart.html"><span>&#171;</span><p>Quay lại giỏ hàng</p></a>
                    <button><p style="font-weight: bold;">Thanh toán và giao hàng</p></button>
                </div>
            </div>
    
            <div class="delivery-content-right">
                <table>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giảm giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
    
                    <tr>
                        <td>Giày Cao Gót Bít Mũi Khóa Trang Trí</td>
                        <td>-40%</td>
                        <td>1</td>
                        <td><p>489.000đ</p></td>
                    </tr>
    
                    <tr>
                        <td>Giày Cao Gót Thanh Cut Out</td>
                        <td>-30%</td>
                        <td>1</td>
                        <td><p>489.000đ</p></td>
                    </tr>
    
                    <tr>
                        <td style="font-weight: bold;" colspan="3">Tổng</td>
                        <td style="font-weight: bold;" colspan="3"><p>978.000đ</p></td>
                    </tr>
    
                    <tr>
                        <td style="font-weight: bold;" colspan="3">Thuế VAT</td>
                        <td style="font-weight: bold;" colspan="3"><p>20.000đ</p></td>
                    </tr>
    
                    <tr>
                        <td style="font-weight: bold;" colspan="3">Tổng tiền hàng</td>
                        <td style="font-weight: bold;" colspan="3"><p>998.000đ</p></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</section>
    `;

    return cart_delivery;
}



document.body.appendChild(HeaderFooter(cart_delivery));
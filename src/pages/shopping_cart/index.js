import './style.css';
import HeaderFooter from '../../layout/Header_Footer';

function shopping_cart() {
    const shopping_cart = document.createElement('div');
    shopping_cart.className = 'body__shopping-cart';

    shopping_cart.innerHTML = `
    <section class="cart">
    <div class="container">
        <div class="cart-top-wrap">
            <div class="cart-top">
                <div class="cart-top-cart cart-top-item">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="cart-top-adress cart-top-item">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="cart-top-payment cart-top-item">
                    <i class="fas fa-money-check-alt"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="cart-content">
            <div class="cart-content-left">
                <table>
                    <thead>
                        <tr>
                            <th>Sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Màu</th>
                            <th>Size</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="./images/productPic/z4830144561354_ddb103e24cb34f7adaabdb31c6af47bd.jpg" alt="Product Image"></td>
                            <td><p>Giày Cao Gót Bít Mũi Khóa Trang Trí</p></td>
                            <td><p>Nâu sáng</p></td>
                            <td><p>40</p></td>
                            <td><input type="number" value="1" min="1"></td>
                            <td><p>489.000đ</p></td>
                            <td><span>X</span></td>
                        </tr>
                        <tr>
                            <td><img src="./images/productPic/z4830144561352_39d930796a05417dc9f831dcbc1fc856.jpg" alt="Product Image"></td>
                            <td><p>Giày Cao Gót Thanh Cut Out</p></td>
                            <td><p>Xanh Navy</p></td>
                            <td><p>40</p></td>
                            <td><input type="number" value="1" min="1"></td>
                            <td><p>489.000đ</p></td>
                            <td><span>X</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="cart-content-right">
                <table>
                    <tr>
                        <th colspan="2">Tổng tiền giỏ hàng</th>
                    </tr>
                    <tr>
                        <td>Tổng sản phẩm</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Tổng tiền hàng</td>
                        <td><p>978.000đ</p></td>
                    </tr>
                    <tr>
                        <td>Tạm tính</td>
                        <td><p class="total-price">978.000đ</p></td>
                    </tr>
                </table>
                <div class="cart-content-right-text">
                    <p>Bạn sẽ được miễn phí ship khi hóa đơn của bạn có tổng giá trị trên 1,000,000đ</p>
                    <p class="free-shipping-message">Mua thêm 22,000đ để được miễn phí ship</p>
                </div>
                <div class="cart-content-right-button">
                    <button class="continue-shopping-btn">Tiếp tục mua sắm</button>
                    <button class="checkout-btn"><a href="./cart_delivery.html">Thanh Toán</a></button>
                </div>
            </div>
        </div>
    </div>
</section>
    `;

    return shopping_cart;
}



document.body.appendChild(HeaderFooter(shopping_cart));
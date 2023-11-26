import './style.css';
import HeaderFooter from '../../layout/Header_Footer';

function product() {
    const product = document.createElement('div');
    product.className = 'body__product';

    product.innerHTML = `
    <div class="container1">
    <div class="main_1">
        <div class="card_clothes">
            <div class="card_clothes_left">
                <div class="giay_left">
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_2_20221125132532_dd93aee6e04543c4b_e037738d5158454da45924aac24418e4_master.jpeg" class="pic_1a">
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_4_20221125132532_ce7487761c2348108_6ccdb10d89744269a1c0b815dda75abb_master.jpeg"class="pic_1b">
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_5_20221125132532_084028fb271346738_b9b79a24ab454d43ac42af0349b1dc63_master.jpeg"class="pic_1b">
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_6_20221125132532_68c6238f529644079_d8818ed248354b4cbf2cbd7b19eb7c96_master.jpeg"class="pic_1b">
                    </div>
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_3_20221125132532_c591076a04e84fd2b_4f3ad42ffa8241539b9a8f4a649dff63_master.jpeg"class="pic_1c">
                    </div>
                </div>

                <div class="giay_right">
                    <div>
                        <img src="https://product.hstatic.net/1000003969/product/xam-xanh_cg09152_1_20221125132532_27897388bab041c9a_714af347cc17496cbe5a21a828a133c6_master.jpeg" class="pic_2">
                    </div>
                </div>
            </div>

            <div class="card_clothes_right">
                <div class="card_clothes_right-top">
                    <div class="card_clothes_right-text">
                        <div class="card_clothes_right-textleft">
                            <p class="text-index">Giày Cao Gót Gót Thanh Cut Out</p>
                            <p class="text-price">446,000đ</p>
                        </div> 

                        <div class="card_clothes_right-icon">
                            <button>

                            </button>
                        </div>
                    </div>

                    <div class="card_clothes_right-detail">
                        <div class="card_clothes_right-detailsize">
                            <p class="text-size">Size</p>
                            <button class="button">35</button>
                            <button class="button">36</button>
                            <button class="button">37</button>
                            <button class="button">38</button>
                            <button class="button">39</button>
                        </div>

                        <div class="card_clothes_right-detailcolor">
                            <p class="text-color">Color</p>
                            <button class="button2"></button>
                            <button class="button3"></button>
                            <button class="button4"></button>
                        </div>

                        <div class="card_clothes_right-detailshipping">
                            <p class="text-shipping">Shipping</p>
                            <div class="text-shipping2nd">
                                <p class="text-shipping2nd1">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
                                <p class="text-shipping2nd2">Thời gian giao hàng: 7 - 14 days</p>
                            </div>
                        </div>

                        <div class="card_clothes_right-detailquantity">
                            <p class="text-quantity">Quantity</p>
                            <input type="number" min = "0" max = "99" class="input1">
                        </div>
                    </div>

                    

                </div>

                <div class="card_clothes_right-down">
                    <div class="card_clothes_right-downprice">
                        <img src="./images/productPic/price.png" alt="">
                    </div>
                    <div class="card_clothes_right-downbtn">
                        <button class="button_down1">MUA SẮM NGAY BÂY GIỜ</button>
                        <button class="button_down2"> THÊM VÀO GIỎ HÀNG</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container2">
    <div class="menu">
        <img src="./images/productPic/top menu.png" alt="">
    </div>

    <div class="main_2">
        <div class="main_2-1">
            <div class="main_2-1-detail">
                    <div class="main_2-1-detailleft">
                        <div class="description1">
                            <p class="text_product1">Mô tả Sản phẩm</p>
                            <p class="text_txt1">Giày cao gót gót thanh cut out thanh lịch, nữ tính <br>
                                Gót trụ phối màu cao 7cm, mũi nhọn mang lại cảm giác thon gọn cho bàn chân <br>
                                Chất liệu da tổng hợp cao cấp, phù hợp mang mọi dịp: đi làm, dạo phố, đi tiệc
                            </p>
                        </div>

                        <div class="description2">
                            <p class="text_product2">Product Description</p>
                            <ul class="text_txt2">
                                <li class="text_mota"><p class="text_mota-txt">Mã sản phẩm: CG09152</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Kiểu dáng: Giày cao gót</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Kích cỡ: 35-36-37-38-39</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Chất liệu: Si mờ trơn</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Độ cao: 9cm</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Màu sắc: Trắng kem-Đen-Xám xanh</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Xuất xứ: Việt Nam</p></li>
                                <li class="text_mota"><p class="text_mota-txt">Giá đã bao gồm VAT</p></li>
                            </ul>
                        </div>

                    </div>


                    <div class="main_2-1-detailright">
                        <div class="composition">
                            <div class="text_composition1">
                                Thành phần
                            </div>

                            <div class="text_composition2">
                                Chúng tôi làm việc với các chương trình giám sát để đảm bảo tuân thủ các tiêu chuẩn xã hội, môi trường,
                                sức khỏe và an toàn cho sản phẩm của chúng tôi. Để đánh giá sự tuân thủ, chúng tôi đã phát
                                triển một chương trình kiểm toán và kế hoạch cải tiến liên tục. <br>
                                VỎ BÊN NGOÀI <br>
                                100% Si mờ trơn
                            </div>
                        </div>

                        <div class="care_instructions">
                            <p class="text_instructions1">Hướng dẫn bảo quản</p>
                            <div class="text_instructions2">
                                <div class="text_instructions2-icon1">
                                    <img src="./images/productPic/005-laundry.png" alt="" class="img_care1">
                                    <p class="text_instructions2-text1">Giặt máy ở mức tối đa. 30°C/86°F </p>
                                </div>
                                <div class="text_instructions2-icon1">
                                    <img src="./images/productPic/040-clothes.png" alt="" class="img_care1">
                                    <p class="text_instructions2-text1">Ủi ở nhiệt độ tối đa 110°C/230°F </p>
                                </div>
                                <div class="text_instructions2-icon1">
                                    <img src="./images/productPic/013-iron.png" alt="" class="img_care1">
                                    <p class="text_instructions2-text1">Nên giặt khô </p>
                                </div>
                                <div class="text_instructions2-icon1">
                                    <img src="./images/productPic/012-laundry.png" alt="" class="img_care1">
                                    <p class="text_instructions2-text1">Tránh ánh nắng trực tiếp </p>
                                </div>
                                <div class="text_instructions2-icon1">
                                    <img src="./images/productPic/030-construction.png" alt="" class="img_care1">
                                    <p class="text_instructions2-text1">Rửa từ trong ra ngoài </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
            <div class="main_2-1-br">
                <img src="./images/productPic/below.png" alt="">
            </div>   

        </div>
    </div>
</div>

<div class="container3">
    <div class="text_menu-text">
        Bạn cũng có thể thích
    </div>
    <div class="text_menu-button-all">
        <div class="dep2">
            <img class="img_text-menu-button" src="./images/productPic/dep2.png" alt="">
            <div class="dep2_detail">
                <p class="text_menu-txt1">Giày Cao Gót Mũi Nhọn Gót Thanh</p>
                <p class="text_menu-button-txt2" >446,000₫</p>
                <button class="text_menu-button">
                    <p class="text_dep2-mota">Thêm vào giỏ hàng</p>
                </button>
            </div>
        </div>
        <div class="dep2">
            <img class="img_text-menu-button" src="./images/productPic/dep2.png" alt="">
            <div class="dep2_detail">
                <p class="text_menu-txt1">Giày Cao Gót Mũi Nhọn Gót Thanh</p>
                <p class="text_menu-button-txt2" >446,000₫</p>
                <button class="text_menu-button">
                    <p class="text_dep2-mota">Thêm vào giỏ hàng</p>
                </button>
            </div>
        </div>
        <div class="dep2">
            <img class="img_text-menu-button" src="./images/productPic/dep2.png" alt="">
            <div class="dep2_detail">
                <p class="text_menu-txt1">Giày Cao Gót Mũi Nhọn Gót Thanh</p>
                <p class="text_menu-button-txt2" >446,000₫</p>
                <button class="text_menu-button">
                    <p class="text_dep2-mota">Thêm vào giỏ hàng</p>
                </button>
            </div>
        </div>
        <div class="dep2">
            <img class="img_text-menu-button" src="./images/productPic/dep2.png" alt="">
            <div class="dep2_detail">
                <p class="text_menu-txt1">Giày Cao Gót Mũi Nhọn Gót Thanh</p>
                <p class="text_menu-button-txt2" >446,000₫</p>
                <button class="text_menu-button">
                    <p class="text_dep2-mota">Thêm vào giỏ hàng</p>
                </button>
            </div>
        </div>
        
    </div>
</div>
    `;

    return product;
}



document.body.appendChild(HeaderFooter(product));
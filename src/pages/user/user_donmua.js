import './style_donmua.css';
import HeaderFooter from '../../layout/Header_Footer';

function user_donmua() {
    const user_donmua = document.createElement('div');
    user_donmua.className = 'body__user_donmua';

    user_donmua.innerHTML = `
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

                    <div class="user_modify_frame">
                        <div class="user_input_state">
                            <p class="state_p">Trạng thái</p>
                            <div class="input_stated">
                                <p class="input_stated_p">Đang vận chuyển</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none">
                                    <g clip-path="url(#clip0_47_402)">
                                    <path d="M1.4314 1.09559L10.5 11.7574L19.5687 1.09559" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_47_402">
                                    <rect width="20" height="12.3529" fill="white" transform="translate(0.5 0.323528)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <!-- đơn 1 -->
                        <div class="don_hang_1">
                            <div class="shopping_item_stt">
                                <p class="donso1_p">Đơn số 1</p>
                            </div>

                            <div class="shopping_item_details">
                                <div class="item_details_product1">
                                    <div class="product_1">
                                        <img class="product_1_img" src="https://s3-alpha-sig.figma.com/img/1f7d/eaf1/e4068f99922774c74ede16162dded3b1?Expires=1701648000&Signature=EviFLSR2iTWbuNUCBeyTYv6EU7R5Tq~1I3BR9PgQ4Q4LDwbnCevTjlH~0bFOQjqjIdUOvUQ2HbUeTuU~G10rOOqbs6eVp-kjPD4X74V~Nz1ZCjcIr0xrOhV62djuhrskbkgMPyA8LPA97trSQYJtQ9dy7N9u7LPxuwr7cr-zhcAmsJT3rOBQ5OjlDz4TzFAJJH0clwU58HGRerGwmGi~OIEYAqloeq-ydLFbNPm3u~061OsG4zMfPj32~PanlD0eOzmQpOBCq6ltJ1Bp05IofGbK8UDTC-SY9FQe7q0ncdzWJnb8pzbwntfXvHIwkJViEoRjyRZec5U0kjNI5tPGtw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_1_name_color">
                                            <p class="product_1_name">
                                                Giày Mules Lượn Sóng Gót Thanh
                                            </p>

                                            <div class="product_1_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <circle cx="6.5" cy="6.5" r="6" fill="#c6ccd8"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product1_price">
                                        <p class="price_p1">489.000đ</p>
                                        <p class="item1_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item1">489.000đ</p>
                                </div>

                                <div class="item_details_product2">
                                    <div class="product_2">
                                        <img class="product_2_img" src="https://s3-alpha-sig.figma.com/img/1865/70c2/0171bc50755d50f730d3606f0a64a2d6?Expires=1701648000&Signature=p10Uw01HZ-CiVtOblwRmQrjb0eElKzp6FeCsOQvi4-ZNMKV1U5I9O54nX7WvUKn5PuSnUh5zWpootpz74k7zemkDSIT7TLeiJuLmlo6Nn7BBgDGqRctYZhDaoBkj1f2w6R7ICxHiUqqgYN~i-wUlJDt467tYUUtzW8HXMS1i~CNNHJO8IKcfv~1TXgz6RlZFYRhGtMnQNeKW~~0OuLms15Zr379gm3N-DO3ECVVB28CYpdYqsM7x92GdpUaR~r0DpGNhZ15hJQVRMlqlwtWd94jBu2p0~h8HIVmjYM198xDcdMWT2TpmnL-Dd0DAhJ43mYyBkXM27zvhF-JplpsP6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_2_name_color">
                                            <p class="product_2_name">
                                                Giày Cao Gót Thanh Cut Out
                                            </p>

                                            <div class="product_2_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                    <circle cx="6.5" cy="6" r="6" fill="#5d6879"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product2_price">
                                        <p class="price_p2">446.000đ</p>
                                        <p class="item2_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item2">446.000đ</p>
                                </div>

                                <div class="item_details_product3">
                                    <div class="product_3">
                                        <img class="product_3_img" src="https://s3-alpha-sig.figma.com/img/9946/8511/5a5c26cd31179b6120d2564c89733173?Expires=1701648000&Signature=NHm6a6lhmCRn8i2p8-SAz1Ccp0rATXqOtJg3rGUcdfzMNKcGWSmsXOZRu3grgYRjWu7f1gte7i~n82h213T9k-KYpRbANOcrjIA4BecfkCOefRD~n3qKFvngwvTHvtizj4v4NV0AwbcqEvYzR5o69ZaT-h7CimDj3JlYAPMlWr3YSF-i-gNXWl9HC6sFc7Zw3~sATpAd5bLc3fLf5r0qaBIrVgRUqclZ2oB9K~3CZucFKGNZ7yB8cIygz3nFsSLPz8hS1c3JaXZeYPN3cRqAjq20V48X8ux4BvmNcJ55tzwzyERi1JaHng0Kog5vcvDU~Wf02NgIxlWzCvYAq0nOAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_3_name_color">
                                            <p class="product_3_name">
                                                Giày Sandal Bệt Quai Ngang Phối Khóa Trang Trí
                                            </p>

                                            <div class="product_3_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                    <circle cx="6.5" cy="6" r="6" fill="#ccd6d3"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product3_price">
                                        <p class="price_p3">450.000đ</p>
                                        <p class="item3_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item3">450.000đ</p>
                                </div>
                            </div>

                            <div class="shopping_item_time">
                                <p class="shopping_thoigian">
                                    Thời gian:
                                </p>

                                <p class="shopping_time">
                                    Time
                                </p>
                            </div>

                            <div class="shopping_item_tonggia">
                                <p class="item_tonggia">
                                    Tổng giá: 
                                </p>

                                <p class="tonggia_dollar">
                                    Price VND
                                </p>
                            </div>
                        </div>
                        <!-- đơn 2 -->
                        <div class="don_hang_1">
                            <div class="shopping_item_stt">
                                <p class="donso1_p">Đơn số 2</p>
                            </div>

                            <div class="shopping_item_details">
                                <div class="item_details_product1">
                                    <div class="product_1">
                                        <img class="product_1_img" src="https://s3-alpha-sig.figma.com/img/2305/6bce/e6adc2c67401f32aa19a46edfb9a620e?Expires=1701648000&Signature=opK-TmFpv-OkknjkzDYaq2UkZpovLOl4LLdITBisuUeJmk3IAgmeKMCtDw-BsCF68P~UMWyzsTv2IfHaS3w0CnGeYRJmP9tsqqgWRtK8QHNvFWTYrWTU35eW0FrULddFG9Mz41K6RRO4WdqtFDh-~bc9TJrrGfzpIGkjTTtW33OhE9Me6yS7f9fLqoFw08ktE8PRXZM67pqXx1J50b44bOuBATBRjFN1hrullzit-WlbzmypKVCQSsnrhY4mEBlrNw7PtRuEkyRJW8kwu0zMlsAUT4hy73~MzfkaYqk5s-N4RCX0gftv9VJu8wDihpfl8kWoiOpAfH3A9ZmdZnQisw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_1_name_color">
                                            <p class="product_1_name">
                                                Giày Cao Gót Bít Mũi Khóa Trang Trí
                                            </p>

                                            <div class="product_1_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                    <circle cx="6.5" cy="6.5" r="6" fill="#b49b7f"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product1_price">
                                        <p class="price_p1">489.000đ</p>
                                        <p class="item1_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item1">489.000đ</p>
                                </div>

                                <div class="item_details_product2">
                                    <div class="product_2">
                                        <img class="product_2_img" src="https://s3-alpha-sig.figma.com/img/3ad8/ef57/dec3821ca45aab05a347120251f3782f?Expires=1701648000&Signature=RoTXnEg~JRuxJTGD-ZUDFghrsTINRDIfz8LtP1heeZOv~Wu-fexe7P0cOyB-q3ndjTQv0L5lrRrkNdCTmYIVxCYQPuogoS51m4gdJPrxU9hpPa6vAo3cEHaXKQ2Sd3P0CDYFzMagU3I0zWkCQwMX4NElZXFnX0XyHKLBs9TT4f2sDWXdo~cXKYNQjJNT0i-KrA7oCoz6OJAcxh8f~dqdciivpv-9LwUPfvQx5jSMP5dAlPwrQSNfx0casXdQjC3s~xo2LKnWkeX~G7G0ai2R7LPcTNyN4KMIkZtYdV~G5CMl2~CB60Gi3dv8GeHM5~Dd75Nv~B5PdQNLx~Gq7oGHrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_2_name_color">
                                            <p class="product_2_name">
                                                Blooming Light
                                            </p>

                                            <div class="product_2_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                    <circle cx="6.5" cy="6" r="6" fill="#333950"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product2_price">
                                        <p class="price_p2">519.000đ</p>
                                        <p class="item2_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item2">519.000đ</p>
                                </div>

                                <div class="item_details_product3">
                                    <div class="product_3">
                                        <img class="product_3_img" src="https://s3-alpha-sig.figma.com/img/6658/b792/068c27c305ce72a40f2301676a939f2e?Expires=1701648000&Signature=UFxe4N-UbADY5nAxTwGt4SYnrsWOJuNx6kVqlPX2G9gP2B2ZsW3ULQxh-FTZWnFFkv5t6lOrNftOh6AVzOGNbgm7FUQWRoDlPoEpgpQf8jsYHK-s1g6c0tn9aO4MjTlsLMu9bW3veDDLx1YTbO5fa8DPj8tmnUPJrvQzaVjBJQkeTCL~knni9~hoWgoLt5sb3kIlYMQCqulClSCvh71ZXwVzF0oGfl2IvUXGw~3Cg8ecod-lenCVjlTLQektYaKcQnFCz0jNLndFfUUBwJlAsK7EYV~0UJA0zJwNx~-GH0XSQM8TUe0PTPMtkZBp1nyz7M7kfYD23FpZHO1OQDVehw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
                                        <div class="product_3_name_color">
                                            <p class="product_3_name">
                                                Giày Mules Phối Khóa Logo Cách Điệu
                                            </p>

                                            <div class="product_3_color">
                                                <p>Color:</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                                    <circle cx="6.5" cy="6" r="6" fill="#f0dfd5"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="item_details_product3_price">
                                        <p class="price_p3">450.000đ</p>
                                        <p class="item3_quantity">x1</p>
                                    </div>

                                    <p class="price_sum_item3">$450.000đ</p>
                                </div>
                            </div>

                            <div class="shopping_item_time2">
                                <p class="shopping_thoigian">
                                    Thời gian:
                                </p>

                                <p class="shopping_time">
                                    Time
                                </p>
                            </div>

                            <div class="shopping_item_tonggia2">
                                <p class="item_tonggia">
                                    Tổng giá: 
                                </p>

                                <p class="tonggia_dollar">
                                    Price VND
                                </p>
                            </div>
                        </div>
                    </div>

                    <button class="user_modify_button">
                        <p>Xem thêm</p>
                    </button>
                </div>
            </div>
        </div>
    `;

    return user_donmua;
}



document.body.appendChild(HeaderFooter(user_donmua));
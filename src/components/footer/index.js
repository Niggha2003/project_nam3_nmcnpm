import './style.css';

export default function Footer() {
    const footer = document.createElement('div');
    footer.className = 'Footer';

    footer.innerHTML = `
        <div class="Footer__logo"></div>
        <div class="Footer__top">
            <div class="Footer__subscription">
                <div class="Footer__subscription__name">VatCan</div>
                <div class="Footer__subscription__store">Store</div>
            </div>
            <div class="Footer__mainInfo">
                <div class="Footer__mainInfo__item">
                    <div class="Footer__mainInfo__item__title">
                        Thông tin cửa hàng
                    </div>
                    <p>Về chúng tôi</p>
                    <p>Liên lạc với chúng tôi</p>
                </div>
                <div class="Footer__mainInfo__item">
                    <div class="Footer__mainInfo__item__title">
                        Gọi mua hàng online (08:00 - 21: 00 mỗi ngày)
                    </div>
                    <p>0976760298</p>
                    <p>Tất cả các ngày trong tuần (trừ tết âm lịch)</p>
                </div>
            </div>
        </div>
        <div class="Footer__bottom">
            <div class="Footer__bottom__payment">
                <div class="Footer__bottom__payment__item Footer__bottom__payment__item--visa">
                
                </div>
                <div class="Footer__bottom__payment__item Footer__bottom__payment__item--other">
                
                </div>
                <div class="Footer__bottom__payment__item Footer__bottom__payment__item--paypal">
                
                </div>
            </div>
            <div class="Footer__bottom__description">
                <div class="Footer__bottom__description__address">
                    Số nhà 24 - Ngõ 35 - Trần Cung - Bắc từ Liêm - Hà Nội
                </div>
                <div class="Footer__bottom__description__sub">
                    ©2023 Copyright in reserved for VatCan shop
                </div>
                <div class="Footer__bottom__description__socialMedia">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <rect x="2" y="2.5" width="20" height="20" rx="4" stroke="#434343" stroke-width="1.5"/>
                        <circle cx="18" cy="6.5" r="1" fill="#434343"/>
                        <circle cx="12" cy="12.5" r="5" stroke="#434343" stroke-width="1.5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18 3.5H15C12.2386 3.5 10 5.73858 10 8.5V10.5H6V14.5H10V21.5H14V14.5H18V10.5H14V8.5C14 7.94772 14.4477 7.5 15 7.5H18V3.5Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                        <path d="M1.90891 7.5952L17.2976 0.944582C18.0212 0.631829 18.8054 1.24041 18.682 2.01906L16.5779 15.295C16.448 16.1151 15.4331 16.4287 14.8631 15.825L11.5295 12.2699C10.8523 11.5526 10.7992 10.4488 11.4045 9.66984L13.7232 6.42966C13.8626 6.25029 13.6425 6.01431 13.4538 6.14086L8.60651 9.39269C7.78393 9.94452 6.78586 10.1715 5.80554 10.0297L2.16248 9.50284C1.16449 9.3585 0.98328 7.99523 1.90891 7.5952Z" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    `;

    return footer;
}


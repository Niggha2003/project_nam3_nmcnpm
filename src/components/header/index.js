import './style.css';

export default function Header() {
    const header = document.createElement('div');
    header.className = 'Header';

    header.innerHTML = `
            <div class="Header__top">
            <a href="./index.html" class="Header__top__logo">
                <div class="Header__top__logo--logo">
                </div>
                <div class="Header__top__logo--name">
                    VatCan
                </div>
            </a>
            <div class="Header__top__search">
                <input type="text" placeholder="Search Products">
                <div class="Header__top__search--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 21 20" fill="none">
                        <g clip-path="url(#clip0_209_676)">
                        <path d="M19.6142 18.7719L17.8598 17.0175M2.07031 9.56141C2.07031 4.95903 5.80127 1.22807 10.4036 1.22807C15.006 1.22807 18.737 4.95903 18.737 9.56141C18.737 14.1638 15.006 17.8947 10.4036 17.8947C5.80127 17.8947 2.07031 14.1638 2.07031 9.56141Z" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_209_676">
                        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div class="Header__top__info Header__items">
                <a href="">Về chúng tôi</a>
                <a href="">Blog</a>
                <a href="">Liên hệ</a>
                <a href="">Trợ giúp</a>
            </div>
            <div class="Header__top__mediaIcons Header__items">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H15C17.7614 20 20 17.7614 20 15V5C20 2.23858 17.7614 0 15 0H5ZM16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#C4C4C4"/>
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
                        <path d="M12 0H9C6.23858 0 4 2.23858 4 5V7H0V11H4V18H8V11H12V7H8V5C8 4.44772 8.44771 4 9 4H12V0Z" fill="#C4C4C4"/>
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M0.896699 6.79637L16.2854 0.145754C17.009 -0.166999 17.7932 0.441585 17.6698 1.22023L15.5657 14.4962C15.4358 15.3162 14.4208 15.6299 13.8509 15.0262L10.398 11.3686C9.72083 10.6514 9.66776 9.54749 10.273 8.76857L12.711 5.63084C12.8503 5.45146 12.6303 5.21549 12.4416 5.34204L7.5943 8.59387C6.77172 9.14569 5.77366 9.37269 4.79333 9.2309L1.15027 8.70401C0.152284 8.55968 -0.0289275 7.1964 0.896699 6.79637Z" fill="#C4C4C4"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="Header__bottom">
            <div class="Header__bottom__category">
                <div class="Header__bottom__category--icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="Header__bottom__category--title">
                    Các loại sản phẩm
                </div>
            </div>
            <div class="Header__bottom__top5">
                <div class="Header__bottom__top5--image">

                </div>
                <div class="Header__bottom__top5--title">
                    <p>Top 5 sản phẩm của tuần</p>
                    <p>Mô tả</p>
                </div>
            </div>
            <div class="Header__bottom__menu Header__items">
                <a href="./user.html" class="Header__bottom__menu--signIn">
                    <div class="Header__bottom__menu--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="17.5" rx="7" ry="3.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                            <circle cx="12" cy="7" r="4" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>User</p>
                </a>
                <a href="./signIn.html" class="Header__bottom__menu--signIn">
                    <div class="Header__bottom__menu--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="17.5" rx="7" ry="3.5" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                            <circle cx="12" cy="7" r="4" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>Đăng nhập</p>
                </a>
                <a href="" class="Header__bottom__menu--favorite">
                    <div class="Header__bottom__menu--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M13.0985 4.70229L12.3335 5.52422L11.5684 4.70229C9.45582 2.43257 6.03059 2.43257 3.91796 4.70229C1.80534 6.972 1.80534 10.6519 3.91796 12.9217L10.8034 20.3191C11.6484 21.227 13.0185 21.227 13.8636 20.3191L20.749 12.9217C22.8616 10.6519 22.8616 6.972 20.749 4.70229C18.6364 2.43257 15.2112 2.43257 13.0985 4.70229Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>Yêu thích</p>
                </a>
                <a href="./shopping_cart.html" class="Header__bottom__menu--cart">
                    <div class="Header__bottom__menu--icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p>Giỏ hàng</p>
                    <div class="Header__bottom__menu--cart--quantity">3</div>
                </a>
                
                
            </div>
            </div>
    `;

    return header;
}


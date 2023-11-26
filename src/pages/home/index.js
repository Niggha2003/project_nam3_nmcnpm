import './style.css';
import HeaderFooter from '../../layout/Header_Footer';
import Swipe from '../../components/Swipe';
import ShopItem from '../../components/shopItem';
import product from './products';

function Home() {
    const home = document.createElement('div');
    home.className = 'home';

    const home_body = document.createElement('div');
    home_body.className = 'home__body';

    home.innerHTML = `
        <div class="home__banner"></div>
    `;

    home_body.innerHTML += `
        <div class="home__body__intro-text">Có thể bạn sẽ thích</div>
    `;

    home_body.appendChild(Swipe(product.maybeLike));

    home_body.innerHTML += `
        <div class="home__body__intro-text">Các sản phẩm bán chạy của chúng tôi</div>
    `;

    const shopItemList = document.createElement('div');
    shopItemList.className = 'home__body__shop-item-list';

    product.item.forEach(element => {
        shopItemList.appendChild(ShopItem(element));
    })
    

    home_body.appendChild(shopItemList);

    home_body.innerHTML += `
        <div class="home__body__more-item">Xem thêm</div>
    `;

    home.appendChild(home_body);
    return home;
}


document.addEventListener('DOMContentLoaded', function() {
    const swipeList = document.querySelector('.swipe-list');
    const firstSwipeItem = document.querySelector('.swipe__item');
    const leftArrow = document.querySelector('.swipe__arrow--left');
    const rightArrow = document.querySelector('.swipe__arrow--right');

    leftArrow.addEventListener('click',() => {
        const rect = firstSwipeItem.getBoundingClientRect();
        console.log(rect.left)
        if(rect.left > 90 && rect.left < 100) {
            swipeList.style.transform = 'translate3d(' + -200/3 + '%, 0px, 0px)';
        }
        if(rect.left < -2500 && rect.left > -2600) {
            swipeList.style.transform = 'translate3d(' + -100/3 + '%, 0px, 0px)';
        }
        if(rect.left < -1200 && rect.left > -1300) {
            swipeList.style.transform = 'translate3d(' + 0 + '%, 0px, 0px)';
        }
    })

    rightArrow.addEventListener('click',() => {
        const rect = firstSwipeItem.getBoundingClientRect();
        if(rect.left > 90 && rect.left < 100) {
            swipeList.style.transform = 'translate3d(' + -100/3 + '%, 0px, 0px)';
        }
        if(rect.left < -2500 && rect.left > -2600) {
            swipeList.style.transform = 'translate3d(' + 0 + '%, 0px, 0px)';
            console.log(10)
        }
        if(rect.left < -1200 && rect.left > -1300) {
            swipeList.style.transform = 'translate3d(' + -200/3 + '%, 0px, 0px)';
        }
    })

    const favoriteIcons = document.querySelectorAll('.shop__item__content__top__favorite svg');
    favoriteIcons.forEach(favoriteIcon => {
        favoriteIcon.addEventListener('click',  function(event) {
            event.stopPropagation();
        })
    })
    
    

});



document.body.appendChild(HeaderFooter(Home));

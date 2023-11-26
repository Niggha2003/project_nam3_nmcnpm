import './swipeItem.css';

function SwipeItem(info = {src: "./images/shopPic/shoe1.png", href: "./index.html", title: "Giày búp bê rất cute nha mọi người ơi"}) {
    const srcPath = 'url(' + info.src + ')';
    const swipeItem = document.createElement('div');
    swipeItem.className = 'swipe__item';

    swipeItem.innerHTML = `
        <a style="background-image: ${srcPath}" href="${info.href}" class="swipe__item_img"></a>
        <div href="${info.href}" class="swipe__item__content">
            <div class="swipe__item__content__title">
                <p>${info.title}</p>
            </div>
            <a href="${info.href}" class="swipe__item__content__shop-button">Shop Now</a>
        </div>
    `;

    return swipeItem;
}

export default SwipeItem;

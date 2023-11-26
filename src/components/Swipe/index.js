import './swipe.css';
import SwipeItem from './SwipeItem';

function Swipe(swipeItems = []) {
    const swipe = document.createElement('div');
    swipe.className = 'swipe';

    const swipeList = document.createElement('div');
    swipeList.className = 'swipe-list';
    swipe.innerHTML = `
        <div class="swipe__arrow swipe__arrow--left">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M24.5 12.25L17.5 21L24.5 29.75" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class=" swipe__arrow swipe__arrow--right">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M17.5 12.25L24.5 21L17.5 29.75" stroke="#434343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    `;
    swipeItems.forEach(item => {
        swipeList.appendChild(SwipeItem(item));
    })
    

    swipe.appendChild(swipeList);

    return swipe;
}




export default Swipe;
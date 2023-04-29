cardSideFront = document.querySelectorAll('.card-tour__side_front');
cardSideBack = document.querySelectorAll('.card-tour__side_back');
lng = cardSideBack.length;
screenWidth = window.screen.width;
function CardRem() {
    for (let i = 0; i < lng; i++) { 
        cardSideFront[i].addEventListener('click', () => {
            cardSideFront[i].style.transform = 'rotateY(-180deg)';
            cardSideBack[i].style.transform = 'rotateY(0deg)';
        })
        cardSideBack[i].addEventListener('click', () => {
            cardSideFront[i].style.transform = 'rotateY(0deg)';
            cardSideBack[i].style.transform = 'rotateY(180deg)';
        })
    }
}
if (screenWidth < 820) {
    CardRem();
}
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menu = $('.menu__icon')
const lightSun = $('.light__sun');
const lightMoon = $('.light__moon');
const menuList = $('.menu__list');
const iconMenu = $('.menu__icon--menu');
const iconClose = $('.menu__icon--close');
const body = $('body');
const profilioBTn = $$('.profilio__item')
const profilioInfo = $('.profilio__info')



const init = {
    card: [
        {
            id: "1",
            img: "./asset/img/img1.jpg",
            type: "design"
        },
        
        {
            id: "2",
            img: "./asset/img/img2.jpg",
            type: "design"
        },
        
        {
            id: "3",
            img: "./asset/img/img3.jpg",
            type: "design"
        },

        {
            id: "4",
            img: "./asset/img/img4.jpg",
            type: "code"
        },
        
        {
            id: "5",
            img: "./asset/img/img5.jpg",
            type: "code"
        },
        
        {
            id: "6",
            img: "./asset/img/img6.jpg",
            type: "webside"
        },
        
        {
            id: "7",
            img: "./asset/img/img7.jpg",
            type: "brand"
        },
        
        {
            id: "8",
            img: "./asset/img/img8.jpg",
            type: "brand"
        },
        
        {
            id: "8",
            img: "./asset/img/img9.jpg",
            type: "brand"
        }
    ]
};

function renderCard() {
    const cards = init.card
    .filter(card => card.type === "design" || card.type === "code" || card.type === "webside" || card.type === "brand")    
    .map( card => 
        `
            <div class="col l-4 profilio__container data-type="${card.type}"">
                <img src="${card.img}" alt="" class="profilio__img">
                <div class="profilio__title">
                    <h3>PROJECT TITLE</h3>
                </div> 
            </div>   
        `
    )
    profilioInfo.innerHTML = cards.join('');
}


function handleShowEachTypeCard() {
    profilioBTn.forEach((btn) => {
        btn.addEventListener("click", function () {
            var dataType = this.getAttribute('data-type');
            const cards = init.card
                .filter(card => card.type == dataType)
                .map(card =>
                    `
                    <div class="col l-4 profilio__container data-type="${card.type}"">
                        <img src="${card.img}" alt="" class="profilio__img">
                        <div class="profilio__title">
                            <h3>PROJECT TITLE</h3>
                        </div> 
                    </div>   
                `
            );
            profilioInfo.innerHTML = cards.join('');
        })
    })
    
    profilioBTn[0].addEventListener('click', () => {
        renderCard()
    })
}

function handleMenu(){
    iconMenu.addEventListener("click", function () {
        $('.menu__icon--menu.active').classList.remove("active");
        iconClose.classList.add("active");
        iconClose.style.animation = 'rotate 0.1s ease';
        menuList.style.display = "flex";
        menuList.style.animation = 'render 0.5s both';
    })

    iconClose.addEventListener("click", function () {
        $('.menu__icon--close.active').classList.remove("active");
        iconMenu.classList.add("active");
        iconMenu.style.animation = 'rotate 0.1s both';
        menuList.style.display = "none";
    })
}

function handleLight() {
    lightSun.addEventListener("click", function () {
        $('.light__sun.active').classList.remove('active');
        lightMoon.classList.add('active')
        lightMoon.style.animation = 'rotate 0.1s ease';
        body.classList.toggle('dark')
    })
    
    lightMoon.addEventListener("click", function () {
        $('.light__moon.active').classList.remove('active');
        lightSun.classList.add('active');
        lightSun.style.animation = 'rotate 0.1s ease';
        body.classList.toggle('dark')
    })
}

function handleHideMenuList() {
    window.onscroll = function () { 
        if (menuList.style.display === 'flex') {
            menuList.style.display = 'none';
            $('.menu__icon--close.active').classList.remove("active");
            iconMenu.classList.add("active");   
        }
    }
}



function start() { 
    handleMenu();    
    handleLight();
    handleHideMenuList();
    renderCard()
    handleShowEachTypeCard();
}
start();
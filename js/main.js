// ### Start Nav-Bar-Icon ### //
// Get Main Elements
let navLinks = document.querySelector('.header .nav-links');
let toggleBtn = document.getElementById('menu-btn');
let toggleIcon = document.querySelector('.menu-btn i');

// Bar-Icon BTN onClick
toggleBtn.onclick = ()=> {
    toggleIcon.classList.toggle('fa-times');
    navLinks.classList.toggle('active')
}
// ### End Nav-Bar-Icon ### //

// ### Start Home Section ### //
// Home-Swiper
var swiperHome = new Swiper(".home-slider", {
    gabCursor: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ### End Home Section ### //

// ### Start Food Section ### //
let dishes = document.querySelectorAll(".food-box");
let dishesArray = Array.from(dishes);
let foodPreviewContainer = document.querySelector(".food-preview-container");
let foodPreview = document.querySelectorAll(".food-preview");
let foodPreviewArray = Array.from(foodPreview);
let closePreview = document.getElementById("close-preview");

dishesArray.forEach(dish => {
    dish.addEventListener('click', (e)=> {
        // console.log("clicked");
        let foodNum = e.target.getAttribute("data-num");
        foodPreviewArray.forEach(preview => { 
            let previewNum = preview.getAttribute("data-target")
            // remove active class from all previews
            preview.classList.remove("active")
            // create click event on close btn to close preview popup
            closePreview.onclick = _ => foodPreviewContainer.style.display = 'none';
            if(foodNum == previewNum) {
                foodPreviewContainer.style.display = 'flex';
                preview.classList.add("active")
            }
        }); 
    });
});

// Food-Swiper
const swiperFood = new Swiper('.food-boxes-container', {
    gabCursor: true,
    loop: true,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
  });
// ### End Food Section ### //

// ### Start Gallery Section ### //
// get Elements
let allBoxes =document.querySelectorAll(".g-box");
let latestOpenedImg;

// Loop On All Images
allBoxes.forEach((box) => {
    box.addEventListener('click', mainFunc)
});

// Main Function To Create Window Gallery Popup
function mainFunc(e) {
    //create galleryWindow
    let galleryWindow = document.createElement('div');
    galleryWindow.classList.add("gallery-window");
    document.body.appendChild(galleryWindow);

    //create image
    let windowImg = document.createElement('img');
    currentImgSrc = e.target.children[0].src;
    let currentImgSrcSplit = currentImgSrc.split(".jpg")[0];
    let currentImgNum = currentImgSrcSplit.charAt(currentImgSrcSplit.length - 1);
    latestOpenedImg = currentImgNum;
    windowImg.src = `./imgs/food-galler-img-${latestOpenedImg}.jpg`
    windowImg.classList.add('window-img')
    galleryWindow.appendChild(windowImg)
    
    //create next btn
    let nextBtn = document.createElement('div');
    nextBtn.innerHTML = '>';
    nextBtn.classList.add('next-btn');
    galleryWindow.appendChild(nextBtn);
    nextBtn.addEventListener('click', _=> nextBtnFunc(windowImg, allBoxes));
    
    //create prev btn
    let prevBtn = document.createElement('div');
    prevBtn.innerHTML = '<';
    prevBtn.classList.add('prev-btn');
    galleryWindow.appendChild(prevBtn);
    prevBtn.addEventListener('click', _=> prevBtnFunc(windowImg, allBoxes));
    
    //create closeBtn
    let closeBtn = document.createElement('i');
    closeBtn.classList.add("close-btn", 'fa-regular', 'fa-circle-xmark');
    galleryWindow.appendChild(closeBtn);
    closeBtn.addEventListener('click', _=> closeBtnFunc(galleryWindow))
}

// Create NextBtn Function
function nextBtnFunc (img, boxes) {
    latestOpenedImg++
    if (latestOpenedImg > boxes.length) {
        latestOpenedImg = 1;
    }
    img.src = `./imgs/food-galler-img-${latestOpenedImg}.jpg`;
};

// Create PrevBtn Function
function prevBtnFunc(img, boxes) {
    latestOpenedImg--;
    if (latestOpenedImg < 1) {
        latestOpenedImg = boxes.length;
    }
    img.src = `./imgs/food-galler-img-${latestOpenedImg}.jpg`;
}

// Create CloseBtn Function
function closeBtnFunc(window) {
    window.remove();
}
// ### End Gallery Section ### //

// ### Start Menu Section ### //
// Menu-Swiper
const swiperMenu = new Swiper('.menu-slide-container', {
    gabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetween: 20,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// ### End Menu Section ### //

// ### Start Blogs Section ### //
// blogs-Swiper
const swiperBlogs = new Swiper('.posts-container', {
    gabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
});
// ### End Blogs Section ### //
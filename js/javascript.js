// 상단 KOR버튼
let countryClick = document.querySelector(".top__left ul li.country__first");
let CountrySecond = document.querySelector(".top__left .country__list ul > li > ul > .country__second");
// 상단 search버튼
let topsearchBtn = document.querySelector(".site__search form .searchBtn");
// 하단 신일MALL 버튼
let bottomMallBtn = document.querySelector(".header__mall ul li a.mall");
// 메뉴
let menuHover = document.querySelectorAll(".header__bottom .nav > ul > li");
let submenuShow = document.querySelectorAll(".header__bottom .nav > ul > li > ul.submenu");
// header태그의 햄버거 메뉴 클릭시에
let hamburgerClick = document.querySelector(".header__mall ul li a.submenu");
let hamburgerShow = document.querySelector(".hamberger__modal");
let hamburgerClose = document.querySelector(".hamberger__modal .modal__box .modal__close");

// KOR
countryClick.addEventListener("click", () => {
  CountrySecond.classList.toggle("active");
});

//상단search버튼
topsearchBtn.addEventListener("click", () => {
  alert("준비 중입니다.^_^. 눌러주셔서 감사합니다.");
});
//하단 신일MALL버튼
bottomMallBtn.addEventListener("click", () => {
  alert("ㅠㅠ.아직 준비중이네요.");
});

// 메뉴
menuHover.forEach((item, index, Array) => {
  menuHover[index].addEventListener("mouseover", () => {
    submenuShow[index].style.display = "block";
  });
  
  menuHover[index].addEventListener("mouseout", () => {
    submenuShow[index].style.display = "none";
  });
});

// 햄버거
hamburgerClick.addEventListener("click", () => {
  hamburgerShow.style.display = "block";
});
hamburgerClose.addEventListener("click", () => {
  hamburgerShow.style.display = "none";
});




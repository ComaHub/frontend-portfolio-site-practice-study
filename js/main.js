// ScrollMagic 사용

const spyEls = document.querySelectorAll("section.scroll-spy");

const controller = new ScrollMagic.Controller();
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부 감시할 요소 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 (0 ~ 1)
  })
  .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // controller에 장면을 할당
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드(기본값) / vertical(수직)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 기본값 3000
  },

  // Pagination 설정 (하단 버튼)
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  }
});

// Modal 창 띄우기
const modalBtnList = document.querySelectorAll(".project .btn-modal");
const modalEl = document.querySelector("#modal");
const modalContentEl = document.querySelector("#modal .modal-content");
const closeBtn = document.querySelector("#modal .btn-close");

const imageModalBtnList = document.querySelectorAll(".project .btn-modal-image");
const imageModalEl = document.querySelector("#imageModal");
const imageModalContentEl = document.querySelector("#imageModal .modal-content");
const imageCloseBtn = document.querySelector("#imageModal .btn-close");
const imageSrcEl = document.querySelector("#imageModal img");

// Quiz: modalBtn 누르면 모달창이 뜨고 closeBtn 누르면 닫히도록 스크립트 설정하기
// style 속성: JS로 CSS 스타일 제어하는 속성

modalContentEl.addEventListener("click", (event) => {
  event.stopPropagation();
})

imageModalContentEl.addEventListener("click", (event) => {
  event.stopPropagation();
})

modalBtnList.forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    modalEl.classList.add("modal-show");
  });
});

closeBtn.addEventListener("click", () => {
  modalEl.classList.remove("modal-show");
});

modalEl.addEventListener("click", () => {
  modalEl.classList.remove("modal-show");
});

imageModalBtnList.forEach((imageModalBtn) => {
  imageModalBtn.addEventListener("click", () => {
    imageSrcEl.src = imageModalBtn.dataset.imageSrc;
    imageModalEl.classList.add("modal-show");
  });
});

imageCloseBtn.addEventListener("click", () => {
  imageModalEl.classList.remove("modal-show");
})

imageModalEl.addEventListener("click", () => {
  imageModalEl.classList.remove("modal-show");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalEl.classList.remove("modal-show");
    imageModalEl.classList.remove("modal-show");
  }
})

// 추가로 해볼 만한 것
// 1. 모달 바깥 영역 클릭 시 닫기
// 2. ESC 키로 닫기
// 3. Fade 애니메이션 넣기


// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체 활용
document.querySelector(".this-year").textContent = new Date().getFullYear();

// 최상단 이동
const toTopEl = document.querySelector("#to-top");

// 페이지에 스크롤 이벤트 감지 추가
// window: 브라우저 창 객체
window.addEventListener("scroll", () => {
  // 페이지 스크롤 위치가 500px을 넘으면 요소를 보이고
  // 500px을 넘지 않으면 요소를 숨기기
  if (window.scrollY > 500) {
    toTopEl.style.opacity = "1";
    toTopEl.style.transform = "translateX(0px)";
  } else {
    toTopEl.style.opacity = "0";
    toTopEl.style.transform = "translateX(100px)";
  }
});

// 모바일용 메뉴
const btnHamburger = document.querySelector(".btn-hamburger");
const navEl = document.querySelector("header nav");
const menuItems = document.querySelectorAll("header nav ul li a")

btnHamburger.addEventListener("click", () => {
  // if (navEl.classList.contains("active")) {
  //   navEl.classList.remove("active");
  // } else {
  //   navEl.classList.add("active");
  // }

  navEl.classList.toggle("active");
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    navEl.classList.remove("active");
  })
})
// 커스텀 커서 요소를 선택함
const cursor = document.querySelector('.cursor');

// 마우스 위치 변수 선언
let mouseX = 0;
let mouseY = 0;

// 커서 위치 변수 선언
let cursorX = 0;
let cursorY = 0;

// 마우스 이동할 때마다 위치 변수에 저장
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

// 커서 애니메이션 함수 (커서가 마우스를 부드럽게 따라가도록 반복 실행)
function animateCursor() {
    // 부드러운 이동을 위한 보간 계산
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}

// 커서 애니메이션 시작
animateCursor();

// 커서 크기 효과를 적용할 요소 선택 (커서가 커지는 효과를 주는 요소들)
const hoverElements = document.querySelectorAll (
    "a, button, .project_card, .about_stat, contact_sticker"
);

// 각각의 요소에 hover 이벤트 추가
hoverElements.forEach(function (element) {

    // 마우스가 요소 위로 올라갔을 때 (커서 확대)
    element.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor_active");
    });

    // 마우스가 요소 밖으로 나갔을 때 (커서 기본 크기)
    element.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor_active");
    });
});
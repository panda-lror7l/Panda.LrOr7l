/* 기존 스타일 유지 */

/* 반응형 */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .career-card {
        width: 80%;
        margin: 10px auto;
    }
}

/* 스크롤 애니메이션 */
section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

/* 커리어 카드 마우스 오버 효과 */
.career-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}
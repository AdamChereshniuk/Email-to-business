// HeaderItems
const headerItemModals = document.querySelectorAll(".header-modal");
const headerItemServices = document.querySelector(".header__item-services");
const headerItemServicesModal = document.querySelector(".header__item-services-modal");
const headerItemApps = document.querySelector(".header__item-apps");
const headerItemAppsModal = document.querySelector(".header__item-apps-modal");
const headerItemCases = document.querySelector(".header__item-cases");
const headerItemCasesModal = document.querySelector(".header__item-cases-modal");

headerItemModals.forEach(modal => modal.classList.add("none"));

headerItemServices.addEventListener("click", () => {
    headerItemAppsModal.classList.add("none");
    headerItemCasesModal.classList.add("none");

    if(headerItemServicesModal.classList.contains("none")) {
        headerItemServicesModal.classList.remove("none");
    } else {
        headerItemServicesModal.classList.add("none");
    };
});
headerItemApps.addEventListener("click", () => {
    headerItemServicesModal.classList.add("none");
    headerItemCasesModal.classList.add("none");

    if(headerItemAppsModal.classList.contains("none")) {
        headerItemAppsModal.classList.remove("none");
    } else {
        headerItemAppsModal.classList.add("none");
    };
});
headerItemCases.addEventListener("click", () => {
    headerItemServicesModal.classList.add("none");
    headerItemAppsModal.classList.add("none");

    if(headerItemCasesModal.classList.contains("none")) {
        headerItemCasesModal.classList.remove("none");
    } else {
        headerItemCasesModal.classList.add("none");
    };
});

// Reviews
let areHiddenReviewTextsOpen = false;
const reviewsTextsHidden = document.querySelectorAll(".reviews__text-hidden");
const reviewsNextBtn = document.querySelector(".reviews__next-btn");

reviewsTextsHidden.forEach(text => text.classList.add("none"));

reviewsNextBtn.addEventListener("click", () => {
    if(areHiddenReviewTextsOpen) {
        areHiddenReviewTextsOpen = !areHiddenReviewTextsOpen;
        reviewsTextsHidden.forEach(text => text.classList.add("none"));
        reviewsNextBtn.innerHTML = "Читать далее>>";
    } else {
        areHiddenReviewTextsOpen = !areHiddenReviewTextsOpen;
        reviewsTextsHidden.forEach(text => text.classList.remove("none"));
        reviewsNextBtn.innerHTML = "<<Свернуть";
    };
});

// We
const weRightForm = document.querySelector(".we-right__form");
const weRightFormInputs = document.querySelectorAll(".we-right__form-input");
const weRightFormError = document.querySelector(".we-right__form-error");
const weRightFormSuccessMsg = document.querySelector(".we-right__form-success-msg");

[weRightFormError, weRightFormSuccessMsg].forEach(el => el.classList.add("none"));

weRightForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let areAllInputsFilled = true;
    for (const input of weRightFormInputs) {
        if(input.value.trim() === "") {
            areAllInputsFilled = false;
            break;
        };
    };

    if(areAllInputsFilled) {
        weRightFormError.classList.add("none");
        weRightFormSuccessMsg.classList.remove("none");
    } else {
        weRightFormError.classList.remove("none");
    };
});

// Cases
let areHiddenCasesOpen = false;
const casesItemsHidden = document.querySelectorAll(".cases__item-hidden");
const casesMoreBtn = document.querySelector(".cases__more-btn");

casesItemsHidden.forEach(item => item.classList.add("none"));

casesMoreBtn.addEventListener("click", () => {
    if(areHiddenCasesOpen) {
        areHiddenCasesOpen = !areHiddenCasesOpen;
        casesItemsHidden.forEach(item => item.classList.add("none"));
        casesMoreBtn.innerHTML = "Смотреть все кейсы";
    } else {
        areHiddenCasesOpen = !areHiddenCasesOpen;
        casesItemsHidden.forEach(item => item.classList.remove("none"));
        casesMoreBtn.innerHTML = "Свернуть кейсы";
    };
});

// Modal
const closeModal = (modal, modalContent, modalInputs, modalError, modalSuccess) => {
    if(modalContent !== null) modalContent.classList.remove("none");
    if(modalInputs !== null) modalInputs.forEach(input => input.value = "");
    if(modalSuccess !== null) modalSuccess.classList.add("none");
    if(modal !== null) modal.classList.add("none");
};

// Consult Modal
const heroConsultBtn = document.querySelector(".hero__consult-btn");
const footerWrapperConsultBtn = document.querySelector(".footer-wrapper__consult-btn");
const footerMobileWrapperConsultBtn = document.querySelector(".footer-mobile-wrapper__consult-btn");
const consultModal = document.querySelector(".consult-modal");
const consultModalContent = document.querySelector(".consult-modal__content");
const consultModalCross = document.querySelector(".consult-modal__cross");
const consultModalForm = document.querySelector(".consult-modal__form");
const consultModalSuccess = document.querySelector(".consult-modal__success");
const consultFormEmailInput = document.querySelector(".consult-modal__form-email-input");
const consultFormNameInput = document.querySelector(".consult-modal__form-name-input");
const consultFormPhoneInput = document.querySelector(".consult-modal__form-phone-input");
const consultFormError = document.querySelector(".consult-modal__form-error");
const consultFormInputs = [consultFormEmailInput, consultFormNameInput, consultFormPhoneInput];

consultModal.classList.add("none");
consultModalSuccess.classList.add("none");
consultFormError.classList.add("none");

[heroConsultBtn, footerWrapperConsultBtn, footerMobileWrapperConsultBtn].forEach(btn => btn.addEventListener("click", () => consultModal.classList.remove("none")));
consultModalCross.addEventListener("click", () => closeModal(consultModal, consultModalContent, consultFormInputs, consultFormError, consultModalSuccess));
consultModalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let areAllInputsFilled = true;
    for (const input of consultFormInputs) {
        if(input.value.trim() === "") {
            areAllInputsFilled = false;
            break;
        };
    };

    if(areAllInputsFilled) {
        consultFormError.classList.add("none");

        consultModalContent.classList.add("none");
        consultModalSuccess.classList.remove("none");
    } else {
        consultFormError.classList.remove("none");
    };
});

// Video Modal
const reviewsMoreBtn = document.querySelector(".reviews__more-btn");
const reviewsVideoBtn = document.querySelector(".reviews__video-btn");
const videoModal = document.querySelector(".video-modal");
const videoModalCross = document.querySelector(".video-modal__cross");

videoModal.classList.add("none");

[reviewsMoreBtn, reviewsVideoBtn].forEach(btn => btn.addEventListener("click", () => videoModal.classList.remove("none")));
videoModalCross.addEventListener("click", () => closeModal(videoModal, null, null, null, null));

// Card Modal
const cardModal = document.querySelector(".card-modal");
const cardModalCross = document.querySelector(".card-modal__cross");
const cardsMoreBtns = document.querySelectorAll(".cards__more-btn");
const cardsVideoBtn1 = document.querySelector(".cards__video-btn-1");
const cardsVideoBtn2 = document.querySelector(".cards__video-btn-2");
const cardsVideoBtn3 = document.querySelector(".cards__video-btn-3");
const cardsVideoBtn4 = document.querySelector(".cards__video-btn-4");
const cardContents = [
    {
        id: 0,
        title: "Разработка шаблона для email-рассылки",
        text: "Корпоративный шаблон способен в корне изменить ситуацию в email-маркетинге, превратить канал в самый высококонверсионный.",
    },
    {
        id: 1,
        title: "Разработка Welcome-цепочек и автоворонок писем",
        text: "Создадим серию писем, которая поможет разогреть клиентов, покажет все выгоды сотрудничества и ненавязчиво подведёт пользователей к покупке.",
    },
    {
        id: 2,
        title: "Рассылка «под ключ»",
        text: "Вовлечем пользователей в жизнь сайта.",
    },
    {
        id: 3,
        title: "Обучение email-маркетингу",
        text: "Обучим с нуля или повысим знания в email рассылке ваших сотрудников, тем самым сэкономим бюджет на привлечение новых специалистов.",
    },
    {
        id: 4,
        title: "Брошенная корзина и прочие триггеры",
        text: "Внедрим “под ключ” любую триггерную компанию на ваш сайт",
    },
    {
        id: 5,
        title: "Внедрение email-маркетинга “под ключ”",
        text: "Вы получите команду профессионалов, которая “под ключ” реализует запуск и ведение email-маркетинга.",
    },
    {
        id: 6,
        title: "Внедрение email-маркетинга “под ключ”",
        text: "Вы получите команду профессионалов, которая “под ключ” реализует запуск и ведение email-маркетинга.",
    },
    {
        id: 7,
        title: "Автоматические серии писем",
        text: "Обеспечим ваш бизнес-процесс серией писем, обработаем сегменты. подойдёт для развития маркетплейсов и сервисов.",
    },
];

cardModal.classList.add("none");

const openCardModal = (contentIndex) => {
    cardModal.querySelector(".card-modal__title").innerHTML = cardContents[contentIndex].title;
    cardModal.querySelector(".card-modal__text").innerHTML = cardContents[contentIndex].text;

    cardModal.classList.remove("none");
};

cardModalCross.addEventListener("click", () => closeModal(cardModal, null, null, null, null));
cardsVideoBtn1.addEventListener("click", () => openCardModal(0));
cardsVideoBtn2.addEventListener("click", () => openCardModal(1));
cardsVideoBtn3.addEventListener("click", () => openCardModal(3));
cardsVideoBtn4.addEventListener("click", () => openCardModal(6));
cardsMoreBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => openCardModal(index));
});
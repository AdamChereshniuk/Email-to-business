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

// Modal
const closeModal = (modal, modalContent, modalInputs, modalError, modalSuccess) => {
    modalContent.classList.remove("none");
    modalInputs.forEach(input => input.value = "");
    modalSuccess.classList.add("none");
    modal.classList.add("none");
};

// Consult Modal
const heroConsultBtn = document.querySelector(".hero__consult-btn");
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

heroConsultBtn.addEventListener("click", () => consultModal.classList.remove("none"));
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
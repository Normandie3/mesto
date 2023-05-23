let popupElement = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function openPopup () {
    popupElement.classList.add('popup_opened');
    nameInput.textContent = nameProfile.value;
    jobInput.textContent = jobProfile.value;
}
function closePopup () {
    popupElement.classList.remove('popup_opened');
}

function handlerFormSubmit (evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handlerFormSubmit);
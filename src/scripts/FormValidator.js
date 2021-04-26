class FormValidator {
  constructor(settings, formElement) { 
      this._formElement = formElement
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._errorClass = settings.errorClass;
  }

  _showError(input) { 
    this._error = this._formElement.querySelector('#' + input.id + '-error');
    this._error.textContent = input.validationMessage;
  
    this._error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    this._error = this._formElement.querySelector('#' + input.id + '-error');
    this._error.textContent = '';
  
    this._error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if(input.validity.valid) {
      this._hideError(input)
    } else {
      this._showError(input)
    }
  }

  _toggleButtonState(inputs) {
    const isValid = inputs.every((input) => input.validity.valid)//
    const button = this._formElement.querySelector(this._submitButtonSelector);

    if(isValid) {
      button.classList.remove(this._inactiveButtonClass)
    } else {
      button.classList.add(this._inactiveButtonClass)
    }
  }

  _addEventListener() {
    const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
   

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputs);
      })
    })
  }
  
  enableValidation() {
      this._formElement.addEventListener('submit', ((e) => {
        e.preventDefault()
      }))  
      this._addEventListener()
  }
}
 
export default FormValidator;
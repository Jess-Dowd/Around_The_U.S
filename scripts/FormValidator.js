class FormValidator {
  constuctor(settings, formElement) {
      this._form = formElement;
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._errorClass = settings.errorClass;
  }

  _showError(input) { //validation Message?//
    const error = this._form.querySelector('#' + input.id + '-error');
    error.textContent = validationMessage; //input.validationMessage??//
  
    error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const error = this._form.querySelector('#' + input.id + '-error');
    error.textContent = '';
  
    error.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }
//////////////////////////
  _hasInvalidInput(inputs) {
    const isInvalid = !inputs.every((input) => input.validity.valid)
    return isInvalid
  }

  _checkInputValidity() {
    if(isInvalid) {
      showError()
    } else {
      shideError()
    }
  }

  _toggleButtonState() {
    const button = this._form.querySelector(this._submitButtonSelector)
    
    if(isInvalid) {
      button.classList.add(this._inactiveButtonClass)
    } else {
      button.classList.remove(this._inactiveButtonClass)
    }
  }

  _setEventListeners() {
    const inputs = [this._form.querySelectorAll(this._inputSelector)];   ///Array.from(this._form.querySelectorAll(config.inputSelector))//
    ;

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._setEventListeners();   
  }
}

export default FormValidator;
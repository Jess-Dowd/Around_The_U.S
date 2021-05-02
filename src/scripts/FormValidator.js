class FormValidator {
  constructor(settings, formElement) { 
      this.formElement = formElement
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._errorClass = settings.errorClass;
  }
  
  _showError(input) { 
    this._error = this.formElement.querySelector(`#${input.id}-error`);
    this._error.textContent = input.validationMessage;
  
    this._error.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    this._error = this.formElement.querySelector(`#${input.id}-error`);
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
    const button = this.formElement.querySelector(this._submitButtonSelector);
    
    if(isValid) {
      button.classList.remove(this._inactiveButtonClass)
    } else {
      button.classList.add(this._inactiveButtonClass)
    }

    
  }

  
  enableValidation() {
      this.formElement.addEventListener('submit', ((e) => {
        e.preventDefault()
        
      }))  
      
      const inputs = Array.from(this.formElement.querySelectorAll(this._inputSelector));

      inputs.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleButtonState(inputs);
        })
      })
  }
}
 
export default FormValidator;
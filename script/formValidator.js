class FormValidator {
    constuctor(settings, formElement) {
    
      this._inputSelector = settings.inputSelector
      this._submitButtonSelector = settings.submitButtonSelector
      this._inactiveButtonClass = settings.inactiveButtonClass
      this._inputErrorClass = settings.inputErrorClass
      this._errorClass = settings.errorClass
      this._form = formElement
    } 

    _showErrorMessage(input) { 
      const error = this._form.querySelector('#' + input.id + '-error');
      error.textContent = input.validationMessage; 

      error.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(input) {
      const error = this._form.querySelector('#' + input.id + '-error');
      error.textContent = '';

      error.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(input) {
      if(input.validity.valid) {
        _hideErrorMessage(input)
      } else {
        _showErrorMessage(input)
      }
    }

    _toggleButtonState(input) {
      const isValid = inputList.every((input) => input.validity.valid)
      
      if(isValid) {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass)
      } else {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass)
      }
    }

    _setEventListeners() {
      const inputList = [...document.querySelectorAll(this._inputSelector)];
      console.log(inputList);

      inputList.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input, this._form, rest);
          this._toggleButtonState(inputList, this._submitButtonSelector, rest);
        });
        console.log(inputList);
      });  
    }

    enableValidation() { 
      document.addEventListener('submit', (e) => {
        e.preventDefault();
      })
      this._setEventListeners();
    }
  
}
export default FormValidator;
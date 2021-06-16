// import { container } from "webpack";

class Section {
    constructor({items}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this.items = items;
      }
        renderItems() {
            
            // for (let index = 0; index < this.items.length; index++) {
            //     this.items.forEach(this._renderer)
            //   }
            
        };

    addItem(element) {
        this._container.prepend(element);
    }

}

export default Section;

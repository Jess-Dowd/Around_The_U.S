// import { container } from "webpack";

class Section {
    constructor({ items }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this.items = items;
    }

    addItem(element) {
        this._container.prepend(element);
    }

}

export default Section;

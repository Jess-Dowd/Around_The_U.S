// import { container } from "webpack";

class Section {
    constructor(items, { renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this.items = items;
      }
        renderItems() {
            this.items.forEach((item) => {
                this._renderer(item);
            });
        };

    addItem(element) {
        this._container.append(element);
    }

}

export default Section;

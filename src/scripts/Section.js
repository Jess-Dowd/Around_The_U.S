import { container } from "webpack";

class Section {
    constructor({items, renderer}, list) {
        this._list = document.querySelector(list);
        this._items = items,
        this._renderer = renderer
      }

    renderer() {
        this._list.prepend(this._items);
    }

    // addItem() {
        
        // const newItem = {items}
        // return newItem
    // }
}


export default Section;

// const placesList = document.querySelector(".grid-container");
// function renderCard(data) {
//     const card = new Card(data, '#card-template');
//     placesList.prepend(card.generateCard(data));
//   }

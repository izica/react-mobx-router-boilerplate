import {observable, action} from "mobx";

const ItemStore = {
    @observable items: [
        {
            id: 1,
            name: 'Car',
            price: 10680
        },
        {
            id: 2,
            name: 'House',
            price: 65023
        }
    ],

    @action add(name, price){
        this.items.push({
            id: Date.now(),
            name,
            price
        });
    }
}
export default ItemStore;

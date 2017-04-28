import { observable, action } from 'mobx';

class OrderStoreItem {
    @observable quantity;

    constructor(item){
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.photo = item.photo;
        this.quantity = 1;
    }
}

class OrderStore {
    @observable items = Array();

    constructor(){
        this.add = this.add.bind(this);
    }

    @action add(item){
        let i = this.items.filter(i => i.id == item.id);
        if(i[0]){
            i[0].quantity++;
        }else{
            this.items.push(new OrderStoreItem(item));
        }

    }

    @action quantity(item, value){
        item.quantity += value;
    }
}
export default new OrderStore();

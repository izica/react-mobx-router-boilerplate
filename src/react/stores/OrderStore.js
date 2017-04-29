import { observable, action, computed } from 'mobx';

class OrderStoreItem {
    @observable quantity;

    constructor(item){
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.photo = item.photo;
        this.quantity = 1;
    }

    @computed get total(){
        return this.quantity * this.price;
    }
}

class OrderStore {
    @observable items = Array();

    constructor(){
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    @action add(i){
        let item = this.items.filter(item => item.id == i.id);
        if(item[0]){
            item[0].quantity++;
        }else{
            this.items.push(new OrderStoreItem(i));
        }
    }

    @action remove(i){
        this.items = this.items.filter(item => item.id != i.id);
    }
}
export default new OrderStore();

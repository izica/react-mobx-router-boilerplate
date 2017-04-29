import { observable, action } from 'mobx';
import axios from 'axios';

class CatalogStore {
    @observable items = Array();

    constructor(){
        this.getList = this.getList.bind(this);
        this.getList();
    }

    @action getList(){
        axios.get('/items.json')
            .then(response => this.items = response.data.items)
            .catch(error => console.log(error));
    }
}
export default new CatalogStore();

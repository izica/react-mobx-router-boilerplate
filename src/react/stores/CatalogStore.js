import { observable, action } from 'mobx';
import superagent from 'superagent';

class CatalogStore {
    @observable items = Array();

    constructor(){
        this.getList = this.getList.bind(this);
        this.getList();
    }

    @action getList(){
        superagent.get('/items.json')
            .end((error, response) => {
                if(response.ok){
                    this.items = response.body.items;
                }
            });
    }
}
export default new CatalogStore();

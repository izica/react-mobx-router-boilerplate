import { observable, computed, lodash } from '!/app';
import { ExampleStore } from '!/stores';

export default new class ExampleStore {
    @observable items = Array();

    @computed get itemById(){
        return lodash.keyBy(this.items, 'id');
    }
}();

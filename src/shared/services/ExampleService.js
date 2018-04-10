import { action } from '!/app';
import { ExampleStore } from '!/stores';

export default new class GuestService {
    @action
    getItems = () => {
        ExampleStore.items = [
            {
                'id': 1,
                'name': 'example 1'
            },
            {
                'id': 2,
                'name': 'example 2'
            },
        ];
    };
}();

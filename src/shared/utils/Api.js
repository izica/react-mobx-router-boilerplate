import superagent from 'superagent';

import { action, toJS, history } from '!/app';
import { UserService } from '!/services';
import { UserStore } from '!/stores';

export default new class Api {
    base_url = document.body.getAttribute('api');

    catchError = (err) => {
        if (err.response.status === 401) {
            UserService.logout();
            return Promise.reject(err.response.status);
        }

        if (err.response.status === 404) {
            history.push('/error404');
            return Promise.reject(err.response.status);
        }
        return err.response;
    };

    @action
    post = (url, data) => {
        let request = superagent
            .post(this.base_url + url)
            .set('Accept', 'application/json')
            .send(data);

        if (UserStore.token) {
            request.set('Authorization', 'Bearer ' + UserStore.token);
        }
        return request.catch(this.catchError);
    };

    @action
    get = (url, data = {}) => {
        let request = superagent
            .get(this.base_url + url)
            .set('Accept', 'application/json')
            .query(toJS(data));

        if (UserStore.token) {
            request.set('Authorization', 'Bearer ' + UserStore.token);
        }

        return request.catch(this.catchError);
    };

    @action
    put = (url, data) => {
        console.log(data);
        let request = superagent
            .put(this.base_url + url)
            .set('Accept', 'application/json')
            .send(data);

        if (UserStore.token) {
            request.set('Authorization', 'Bearer ' + UserStore.token);
        }
        return request.catch(this.catchError);
    };

    @action
    file = (url, file, data = false, onProgress = false) => {
        let request = superagent.post(this.base_url + url).attach('file', file);

        if (data !== false) {
            request.field(data);
        }

        if (onProgress !== false) {
            request.on('progress', onProgress);
        }

        if (UserStore.token) {
            request.set('Authorization', 'Bearer ' + UserStore.token);
        }
        return request.catch(this.catchError);
    };
}();
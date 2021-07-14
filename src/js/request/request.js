import {
    get,
    post,
    put,
    destroy
} from './http';

const Api = {
    Auth: {
        Login(params) {
            return post('/backend/api/v1/login', params);
        }
    },
    Administrator:{
        Info() {
            return get(`/backend/api/v1/user`);
        }
    },
    App: {
        Index(params) {
            return get('/backend/api/v1/app/index', params);
        },
        Store(params) {
            return post('/backend/api/v1/app/store', params);
        },
        Edit(id, params) {
            return get(`/backend/api/v1/app/edit/${id}`, params);
        },
        Update(id, params) {
            return put(`/backend/api/v1/app/edit/${id}`, params);
        },
        Recharge(id, params) {
            return post(`/backend/api/v1/app/recharge/${id}`, params);
        },
        Record(id, params) {
            return get(`/backend/api/v1/app/${id}/record`, params);
        }
    },
    Stat: {
        Statistic(id, params) {
            return get(`/backend/api/v1/statistic/${id}`, params);
        },
    },
    Member: {
        Info(params) {
            return get(`/backend/api/v1/role`, params);
        },
        Del(id) {
            return destroy(`/backend/api/v1/role/${id}`);
        },
        Add(params) {
            return post(`/backend/api/v1/role`, params);
        },
        Getinfo(id) {
            return get(`/backend/api/v1/role/${id}`);
        },
        Edit(id, params) {
            return put(`/backend/api/v1/role/${id}`, params);
        }
    },
    Order:{
        List(params) {
            return get(`/backend/api/v1/order`, params);
        },
    },
    Media: {
        Image: {
            List(params) {
                return get(`/backend/api/v1/media/images`, params);
            }
        }
    },
    System: {
        Config: {
            All() {
                return get(`/backend/api/v1/setting`);
            },
            Save(params) {
                return post(`/backend/api/v1/setting`, params);
            }
        }

    }
}

export default Api;
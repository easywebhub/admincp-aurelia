import { STORAGE } from './storage';
import {AureliaConfiguration} from 'aurelia-configuration';
import axios, { AxiosInstance } from 'axios';
import { Container } from "aurelia-dependency-injection";
import Qs from 'qs';
import * as _ from 'lodash'

let storage = Container.instance.get(STORAGE);
// axios.defaults.baseURL = AppSetting.apiEndPoint;
const removeEmpty = (obj) => {
    Object.keys(obj).forEach(k =>
        (obj[k] && typeof obj[k] === 'object') && removeEmpty(obj[k]) ||
        (!obj[k] && obj[k] !== undefined) && delete obj[k]
    );
    return obj;
};
axios.defaults.paramsSerializer = function (params) {
    params = removeEmpty(params)
    return Qs.stringify(params)
}
// sau này sẽ mở để tăng tính bảo mật
// if(storage.get("authenToken"))
//     axios.defaults.headers.common['Authorization'] = storage.get("authenToken");
// else
//     axios.defaults.headers.common['Authorization'] = null;

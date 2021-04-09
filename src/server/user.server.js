import cookie from 'js-cookie';
import { instance } from '../utils/axios/instance';
export const login = (data) => instance.post(`login`, data)

export const loginWithToken = () => instance.get(`get-user`, {
  headers: { Authorization: cookie.get('token') }
});
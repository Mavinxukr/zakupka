import axios from 'axios';
import cookie from 'js-cookie';

export const login = (data) => axios.post(`https://prozorro.mavinx.com/api/login`, {
  email: data.email,
  password: data.password,
})

export const loginWithToken = () => axios.get(`https://prozorro.mavinx.com/api/get-user`, {
  headers: { Authorization: cookie.get('token') }
});
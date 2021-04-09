import { instance } from '../utils/axios/instance'
export const registration = (data) => instance.post('register', data);
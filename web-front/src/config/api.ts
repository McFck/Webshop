import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'placeholder' : 'http://localhost:8080/api';
export const itemsUrl = baseUrl + '/items';
export const ordersUrl = baseUrl + '/orders';
export const usersUrl = baseUrl + '/users';
export const sessionsUrl = baseUrl + '/sessions';
export const postOrderUrl = ordersUrl + '/add';
export const postAuthRequestUrl = usersUrl + '/auth';
export const postLogoutUrl = sessionsUrl + '/invalidate/session';
export const verifyAuth = sessionsUrl + '/verifyAuth';

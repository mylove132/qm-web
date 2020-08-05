import Cookies from 'js-cookie'

/**
 * 操作登录cookie
 */
const tokenKey = 'sso.jd.com'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)
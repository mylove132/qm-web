/**
 * 用户信息
 */
interface UserInfo {
    username: string,
    token: string,
    avatar: string,
    email: string
}

/**
 * 登录信息
 */
interface LoginInfo {
    username: string,
    password: string
}


export {UserInfo, LoginInfo};
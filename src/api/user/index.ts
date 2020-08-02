import request from '@/utils/request'

/**
 * 根据ID获取用户信息
 * @param params 
 */
export const getUserInfo = (id: string) =>
  request({
    url: `/user/${id}`,
    method: 'get'
  })

  /**
   * 通过用户名获取信息
   * @param username 
   */
export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'delete'
  })

/**
 * 登录
 * @param data 
 */
export const login = (data: any) =>
  request({
    url: '/user/login',
    method: 'post',
    data
  })

/**
 * 退出登录
 */
export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

/**
 * 验证用户名不能为空
 * @param rules 
 * @param value 
 * @param callback 
 */
const validateUser = (rules: any, value: string, callback: Function) => {
    if (value == null || value == "") {
        callback(new Error('please enter the user'));
    }
    callback();
}
/**
 * 验证密码不能为空
 * @param rules 
 * @param value 
 * @param callback 
 */
const validatePassword = (rules: any, value: string, callback: Function) => {
    if (value == null || value == "") {
        callback(new Error('please enter the password'));
    }
    callback();
}

export const isValidUsername = (str: string) =>
  ["admin", "editor"].indexOf(str.trim()) >= 0;

// 判断是外链，直接跳转。否则使用router-link进行路由跳转
export const isExternal = (path: string) =>
  /^(https?:|mailto:|tel:)/.test(path);

export {validatePassword, validateUser};
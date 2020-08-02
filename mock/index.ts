import Mock from 'mockjs'

let user = Mock.mock('/user/login', 'post', () => {
    return {
        "code": 10000,
        "data": {
            "id": '1',
            "name": "管理员",
            "avatar": "admin",
            "email": "admin@jd.com",
            "token": "12345",
        }
    }
});

export default user;
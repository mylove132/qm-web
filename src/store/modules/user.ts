import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, getUserByName } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import store from '@/store'
import route from '@/router'
import { UserInfo } from '@/model/user'


@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserInfo {
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public email = ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_EMAIL(email: string) {
    this.email = email
  }

  @Action
  public async Login(loginInfo: {username: string, password: string}) {
    let { username, password } = loginInfo
    username = username.trim();
    const { data } = await login({ username: username, password: password })
    setToken(data.token)
    this.SET_TOKEN(data.token);
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserByName(this.name);
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { name, avatar, email } = data.user
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_EMAIL(email)
  }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    removeToken()
    this.SET_TOKEN('');
    route.push('/login');
  }
}

export const UserModule = getModule(User)
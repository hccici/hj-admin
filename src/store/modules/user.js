import md5 from 'md5'
import { login } from '@/api/sys'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login (cxt, info) {
      const { username, password } = info
      login({
        username,
        password: md5(password)
      }).then(data => {
        // todo
      }).cath(err => {
        console.log(err)
      })
    }
  }
}

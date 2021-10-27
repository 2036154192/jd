import store from '@/store/index'

export default {
    goLogin(to, from, next) {
        if (store.state.user.idState) {
            next()
        } else {
            next('/login')
        }
    },
    isLogin(to, from, next) {
        if (store.state.user.idState) {
            next('/')
        } else {
            next()
        }
    }
}
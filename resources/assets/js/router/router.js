import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import store from '@/store/store'
import Login from '@/components/credentials/login'
// import auth from '@/utils/auth.js'

Vue.use(Vuex)
// Vue.use(auth)
Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
	{ path: '/login', component: Login }
	]
})

// router.beforeEach(function(to, from, next) {
	
// 	if(to.matched.some(record => record.meta.forAuth)) {
// 		store.dispatch('getAuth')
// 		if(!Vue.auth.isAuthenticated()) {
// 			next({path: '/'})
// 		} else {
// 			next()
// 		}
// 	} else {
// 		next({path: '/'})
// 	}
// })

export default router
import { createRouter, createWebHashHistory  } from 'vue-router'
import index from './back/index'
import login from './user/index'
import end from './end/index'
import {user} from '../http/api'

const routes = [
  index,
  login,
  end
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    let check = await user.checkUserId();
    
    if (check.data.error === 1) next({ path: "/login" });
    next();
  } else {
    next();
  }

})
export default router

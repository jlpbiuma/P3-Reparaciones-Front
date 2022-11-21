import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import myRepairs from '../views/MyRepairsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/myRepairs',
      name: 'myRepairs',
      component: myRepairs,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to,_,next)=> {
  console.log(`to: ${to.name} -- Auth Required? ${to.meta.requiresAuth}`)

  const token = localStorage.getItem('token')
  // Si la ruta a donde quiero ir necesita autenticación
  // ... y no tengo el token, llévame a la pagina de login
  if (to.meta.requiresAuth && !token) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router

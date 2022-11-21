import { createRouter, createWebHistory } from 'vue-router'
// BEFORE LOGIN
import AboutView from '../views/BeforeLogin/AboutView.vue'
import ContactView from '../views/BeforeLogin/ContactView.vue'
import HomeView from '../views/BeforeLogin/HomeView.vue'
import LoginView from '../views/BeforeLogin/LoginView.vue'
import SignupView from '../views/BeforeLogin/SignupView.vue'

// AFTER LOGIN
import HistoryRepView from '../views/AfterLogin/HistoryRepView.vue'
import MyRepairsView from '../views/AfterLogin/MyRepairsView.vue'
import NewRepairFormView from '../views/AfterLogin/NewRepairFormView.vue'
import PendingView from '../views/AfterLogin/PendingView.vue'
import ProfileView from '../views/AfterLogin/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // BEFORE LOGIN:
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    // AFTER LOGIN
    {
      path: '/historyrepair',
      name: 'historyrepair',
      component: HistoryRepView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/myrepairs',
      name:'myrepairs',
      component: MyRepairsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/newrepair',
      name:'newrepair',
      component: NewRepairFormView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pending',
      name: 'pendingRepairs',
      component: PendingView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
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

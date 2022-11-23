import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

// BEFORE LOGIN
import AboutView from '../views/BeforeLogin/AboutView.vue'
import ContactView from '../views/BeforeLogin/ContactView.vue'
import HomeView from '../views/BeforeLogin/HomeView.vue'
import LoginView from '../views/BeforeLogin/LoginView.vue'
import SignupView from '../views/BeforeLogin/SignupView.vue'

// AFTER LOGIN
import RepairView from '../views/AfterLogin/RepairUnasignedView.vue'
import NewRepairView from '../views/AfterLogin/NewRepairView.vue'
/*
import HistoryRepView from '../views/AfterLogin/HistoryRepView.vue'
import MyRepairsView from '../views/AfterLogin/MyRepairsView.vue'
import PendingView from '../views/AfterLogin/PendingView.vue'
*/
import RepairDoneView from '../views/AfterLogin/RepairDoneView.vue'
import RepairPendingView from '../views/AfterLogin/RepairAsignedView.vue'
import RepairUnasignedView from '../views/AfterLogin/RepairUnasignedView.vue'
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
      path: '/newRepair',
      name: 'newRepair',
      component: NewRepairView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/unasignedRepairs',
      name: 'unasignedRepairs',
      component: RepairUnasignedView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/asignedRepairs',
      name: 'asignedRepairs',
      component: RepairPendingView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/doneRepairs',
      name: 'doneRepairs',
      component: RepairDoneView,
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
// ADD NEW ROUTE CHECKROL WITH GET BACKEND
router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  // Si la ruta a donde quiero ir necesita autenticación
  // ... y no tengo el token, llévame a la pagina de login
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  if (to.name == "unasignedRepairs") {
    authStore.repairViewState = "unasignedRepairs";
  }
  else if (to.name == "asignedRepairs") {
    authStore.repairViewState = "asignedRepairs";
  }
  else if (to.name == "doneRepairs") {
    authStore.repairViewState = "doneRepairs";
  }
  next()
})

export default router

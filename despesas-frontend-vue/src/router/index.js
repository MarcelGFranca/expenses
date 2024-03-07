import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ExpenseEdit from '../views/ExpenseEdit.vue'
import ExpenseAdd from '../views/ExpenseAdd.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { public: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { public: true }
  },
  {
    path: '/expense-edit',
    name: 'expense-edit',
    component: ExpenseEdit
  },
  {
    path: '/expense-add',
    name: 'expense-add',
    component: ExpenseAdd
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if(!to.meta.public && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router

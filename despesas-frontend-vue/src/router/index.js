import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
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
    component: LoginView 
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

export default router

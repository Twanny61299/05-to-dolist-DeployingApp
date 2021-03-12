import { createRouter, createWebHistory } from 'vue-router'
import TasksList from '../views/TasksList.vue'
import About from '../views/About.vue'
import TaskDetails from '../views/TaskDetails.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'

const routes = [
  {
    path: '/',
    name: 'TasksList',
    component: TasksList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    props: true,
    component: TaskDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

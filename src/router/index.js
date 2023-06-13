import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Personajes from '@/views/Personajes.vue'
import Personaje from '@/views/Personaje.vue'
import Contacto from '@/views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/personajes',
    name: 'personajes',
    component: Personajes
  },
  {
    //Path dinámico.
    path: '/personajes/:id',
    name: 'personaje',
    component: Personaje
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

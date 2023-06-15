import Vue from 'vue'
import VueRouter from 'vue-router'
// import Inicio from '@/views/Inicio.vue'
// import Personajes from '@/views/Personajes.vue'
// import Personaje from '@/views/Personaje.vue'
// import Contacto from '@/views/Contacto.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    //Se aplica "lazy loading" para que las rutas carguen por separado y la página cargue rápidamente la primera vez
    component: () => import(/* webpackChunkName: "inicio" */ '@/views/Inicio.vue')
  },
  {
    path: '/personajes',
    name: 'personajes',
    /* Se crean 2 alias para el path "personajes" de manera que si el usuario ingresa a "people"
     o "characters", se redirija a la vista de "personajes" */
    alias: ['/people', '/characters'],
    //Se aplica "lazy loading" para que las rutas carguen por separado y la página cargue rápidamente la primera vez
    component: () => import(/* webpackChunkName: "personajes" */ '@/views/Personajes.vue')
  },
  {
    //Path dinámico.
    path: '/personajes/:id',
    name: 'personaje',
    //Se aplica "lazy loading" para que las rutas carguen por separado y la página cargue rápidamente la primera vez
    component: () => import(/* webpackChunkName: "personaje" */ '@/views/Personaje.vue'),
    //El componente "Personaje" recibirá el id por una prop, por lo que hay que habilitarlo poniendo true
    props: true
  },
  {
    path: '/contacto',
    name: 'contacto',
    //Se aplica "lazy loading" para que las rutas carguen por separado y la página cargue rápidamente la primera vez
    component: () => import(/* webpackChunkName: "contacto" */ '@/views/Contacto.vue')
  },
  {
    //Router comodín
    path: '*',
    component: NotFound
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

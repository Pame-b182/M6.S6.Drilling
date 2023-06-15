<template>
  <div id="app">
    <navigation/>
    <!-- Se aplica la etiqueta "transition" a "router-view" para aplicarle transiciones a la vista -->
    <!-- mode="out-in": la vista que está renderizada la saca y luego entra la nueva vista  -->
    <!-- name="router-anim" : nombre de la animación , nombre de la clase que se utilizará en css -->
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: "app",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    "navigation": Nav
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>
<style>
    body{
  background-image: url("https://i.pinimg.com/originals/a4/5e/e4/a45ee418aa77783d1a847190596d9796.jpg");
  background-size: cover;
}
/* clase ligada a la acción "enter-active": cuando entra el elemento*/
.router-anim-enter-active{
  /* Implementación de la animación "coming" junto con el tiempo que demora */
  animation: coming .5s;
  animation-delay: .5s;
  opacity: 0;
}
/* clase ligada a la acción "leave-active":cuando se va el elemento */
.router-anim-leave-active{
  animation: going .7s;
}
/* Animación coming */
@keyframes coming{
  /* from: en el 0% de la duración de la animación */
  from{
    transform: translateX(-50px);
    opacity: 0;
  }
  /* from: en el 100% de la duración de la animación */
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}
/* Animación going */
@keyframes going{
  /* 0% y 100% es lo mismo que el from to, pero se puede dividir en más etapas de la animación */
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>

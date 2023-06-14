<template>
  <div id="app">
    <navigation/>
    <router-view/>
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
</style>

<template>
  <div class="container m-3">
    <div class="row">
      <div class="col">
        <div class="text-warning text-center">
          <h1>Contacto</h1>
          <p>Para contactarnos puede escribirnos</p>
        </div>
        <form class="text-warning">
            <div class="mb-3">
                <label for="InputName" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control" id="InputName"/>
            </div>
            <div class="mb-3">
                <label for="InputEmail" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="textareaMensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="textareaMensaje" rows="3"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-warning">Enviar</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contacto-component",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
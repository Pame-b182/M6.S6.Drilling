<template>
  <div class="container m-3 p-3">
    <div class="row">
      <div class="col">
        <div class="card w-50 text-center bg-warning mx-auto">
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-warning">Nombre</li>
            <li class="list-group-item bg-warning-subtle">{{personaje.name}}</li>
            <li class="list-group-item bg-warning">Género</li>
            <li class="list-group-item bg-warning-subtle">{{personaje.gender}}</li>
            <li class="list-group-item bg-warning">Altura</li>
            <li class="list-group-item bg-warning-subtle">{{personaje.height}}</li>
            <li class="list-group-item bg-warning">Número películas</li>
            <li class="list-group-item bg-warning-subtle">{{personaje.films.length}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Se importa axios para realizar la petición a la API de los datos de un personaje
import axios from 'axios'
export default {
  name: "personaje-component",
  // props: {},
  data: function () {
    return {
        personaje:{
            /*Dado que la respuesta de la API demora en llegar, es conveniente definir las propiedades del objeto
            como vacías para que no arroje error en la consola*/
            name:"",
            gender:"",
            height:"",
            films:[],
        }
    };
  },
  computed: {
    id(){
        return this.$route.params.id;
    }
  },
  methods: {
    getPersonaje(){
        //${this.id}: viene de computed
        axios.get(`https://swapi.dev/api/people/${this.id}`)
        .then(result=>{
            console.log(result);
            //El data "personaje" que es un objeto vacío que recibe el "result.data" que son los datos de un personaje que viene de la API
            this.personaje=result.data
        })
        .catch(error=>{
            console.log(error);
        })
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  //Para que al cargar la vista se ejecute el método getPersonaje() se utiliza del ciclo de vida, la opción created()
  created(){
    this.getPersonaje()
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
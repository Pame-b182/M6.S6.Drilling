<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1 class="text-warning mt-3">Personajes</h1>
        <!-- Evento click que ejecuta el método "obtenerPersonajes" -->
        <button @click="obtenerPersonajes" type="button" class="btn btn-warning m-3">Buscar más personajes</button>
        <div class="">
            <!-- Evento click que ejecuta el método obtenerPersonaje y recibe de la API como parámetro la url del personaje -->
            <button @click="obtenerPersonaje(personaje.url)" v-for="(personaje, index) in personajes" :key="index" type="button" class="btn btn-outline-warning">{{personaje.name}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Para realizar la petición a la API utilizamos "axios", se instala a través de la terminal 
con el comando "npm install axios" y luego se importa en el "script" del componente en donde
se utilizará*/
import axios from 'axios'
export default {
  name: "personajes-component",
  // props: {},
  data: function () {
    return {
        page:1,
        // Array en donde se guardarán los personajes que llegan de la api
        personajes:[],
    };
  },
  // computed: {},
  methods: {
    //Método que hará la petición a la API a través de axios
    obtenerPersonajes(){
        axios.get(`https://swapi.dev/api/people?page=${this.page}`)
        //json: dato que viene entrando
        .then(json =>{
            //Se guarda en let "json.data.results" para acortar la  escritura
            let results = json.data.results;
            //Se realiza un foreach para recorrer los 10 personajes que vienen por pág.
            //El foreach agrega los personajes a la vista cada vez que se hace click, no los sobreescribe
            results.forEach(personaje => {
                //Se agrega al array "personajes", con el método Push(), el personaje por cada vuelta que da el foreach hasta completar los 10
                this.personajes.push(personaje)
            });
            //Cada vez que haga click en el botón se sumará 1 al page para que vaya avanzando en la paginación y sacar los personajes de todas las páginas
            this.page++
            //Se imprime por consola los personajes guardados en el array.
            console.log(this.personajes);
        })
        .catch(error=>{
            console.log(error);
        })
    },
    //Método que mostrará las características de un personaje al hacer click en el boton del mismo
    //Recibe la url de la API
    obtenerPersonaje(url){
        //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
        let index = ((url).match(/\d+/))[0];
        //Se improme por consola
        console.log(index);
        //Se agrega a la url el index
        //????
        this.$router.push(`/personajes/${index}`);
    }
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.container{
    background-image: url("https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-25_bc15ec98.jpeg") !important;
    background-size: cover !important;
}
</style>
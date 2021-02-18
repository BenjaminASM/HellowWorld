<template>
  <div class="hello">
    <h1 id="titulo">Hellow World</h1>
    <tr v-for="nombres in user" :key="nombres.id">
      <td>{{ nombres.id }}:</td>
      <td>{{ nombres.nombre }}</td>
      <td>{{ nombres.apellido }}</td>
    </tr>
    <br />
    <button @click="reemplazar">cambiar nombre</button>
    <button @click="cargarUsuario">cargar nombres</button>
  </div>
</template>

<script>
//<p>{{this.user.respuesta}}</p> linea creada para traer el resultado de la api simple.
import axios from "axios"
//var url = "http://localhost:8082/usuario";
export default {
  name: "HelloWorld",
  data: () =>({
      user:[]
    }),
  props: {
    msg: String,
    
  },
  mounted() {
    console.log("hola mundo desde mounted");
  },
  methods: {
    /*getTodos() {
      //console.log('todo bien todo correcto') test for methods.getTodos()
      //var axios = require("axios");
      const axiosHeader = axios.create({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },  //metodo que utilice para intentar llamar a la api entregada.
      });
      axiosHeader.get(url).then((response) => console.log(response)).catch((e) => console.log(e))},*/
    cargarUsuario: function () {
      axios
        .get("http://localhost:3000/usuarios")
        .then((response) => {
          this.user = response.data
          console.log(response.data)
        })
        .catch((e) => console.log(e));
    },
    reemplazar: function(){
      axios
      .get("http://localhost:3000/usuarios")
      .then((response) => {
        this.user = response.data
        console.log(response.data)
      })
      document.getElementById("titulo")
      .innerHTML = "Hellow"+" "+ this.user[0].nombre
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

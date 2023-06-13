<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">StarWars</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"><router-link to="/" class="text-decoration-none text-dark">Inicio</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/personajes" class="text-decoration-none text-dark">Personajes</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/contacto" class="text-decoration-none text-dark">Contacto</router-link></a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<style>
    body{
  background-image: url("https://i.pinimg.com/originals/a4/5e/e4/a45ee418aa77783d1a847190596d9796.jpg");
  background-size: cover;
}
</style>

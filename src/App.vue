<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style="background-color: black"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="./assets/pikachu.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          PokeVite
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
  <footer class="bg-dark text-light">
    <div>Design in {{ new Date().getFullYear() }}</div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 56px;
}
</style>

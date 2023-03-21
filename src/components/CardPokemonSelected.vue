<template>
  <div class="card">
    <img :src="pokemon.img" class="card-imgSelected" :alt="pokemon.name" />
    <div class="cardPokemonSelected">
      <h5 class="card-title text-center">{{ pokemon?.name }}</h5>
      <hr />
      <div class="row mb-3">
        <section class="col">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col">
          <strong>Height:</strong>
          <strong>{{ pokemon.height }}</strong>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
const pokemon = defineProps(["name", "xp", "height", "img"]);
</script>

<style scoper></style>

<template>
  <div class="card CardPokemonSelected">
    <img
      v-if="pokemon.name"
      :src="pokemon.img"
      height="270"
      class="card-imgSelected pt-5"
      :class="loading ? '' : 'animate__animated animate__flipInX'"
      :alt="pokemon.name"
    />
    <img
      v-else
      src="../assets/egg_pokemon.svg"
      height="270"
      class="card-imgSelected pt-5"
      alt="???"
    />

    <div class="cardPokemonSelected">
      <h5 class="card-title text-center pt-5">{{ pokemon?.name || "???" }}</h5>
      <hr />
      <div class="row mb-3">
        <section class="col pt-4">
          <strong>XP:</strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col pt-4">
          <strong>Height:</strong>
          <strong>{{ pokemon.height }}</strong>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
const pokemon = defineProps(["name", "xp", "height", "img", "loading"]);
</script>

<style scoper>
.CardPokemonSelected {
  height: 40rem;
  background: rgb(90, 83, 208);
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(90, 83, 208, 0.5) 100%,
    rgba(247, 247, 242, 1) 100%
  );
}
</style>

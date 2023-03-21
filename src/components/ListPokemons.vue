<template>
  <div class="col-4">
    <div class="card p-2 mb-3">
      <p class="text-center">{{ pokemon.name }}</p>
      <img :src="urlBaseSvg" class="card-img" alt="..." height="80" />
    </div>
  </div>
</template>

<script setup>
const pokemon = defineProps(["name", "urlBaseSvg"]);
</script>

<style scoped>
.card {
  background: rgb(5, 56, 213);
  background: radial-gradient(
    circle,
    rgba(5, 56, 213, 0.422) 27%,
    rgba(0, 213, 255, 0.492) 100%
  );
  cursor: pointer;
}

.card:hover {
  background: rgb(5, 56, 213);
  background: radial-gradient(
    circle,
    rgba(5, 56, 213, 0.522) 27%,
    rgba(0, 213, 255, 0.592) 100%
  );
}

.card img:hover {
  padding: 0.1rem;
}
</style>

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
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.16430322128851538) 0%,
    rgba(0, 0, 0, 0.3) 98%,
    rgba(0, 0, 0, 0.4780287114845938) 100%,
    rgba(247, 247, 242, 1) 100%
  );
}

.card:hover {
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 98%,
    rgba(0, 0, 0, 0.7) 100%,
    rgba(247, 247, 242, 1) 100%
  );
}

.card img:hover {
  padding: 0.1rem;
}
</style>

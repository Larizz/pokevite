<template>
  <main>
    <div class="container text-center">
      <div class="row mt-5">
        <div class="col-sm-12 col-md-6">
          <cardPokemonSelected
            :name="pokemonSelected?.name"
            :xp="pokemonSelected?.base_experience"
            :height="pokemonSelected?.height"
            :img="pokemonSelected?.sprites.other.dream_world.front_default"
            :loading="loading"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="mb-3">
                <label hidden for="searchPokemonFields" class="form-label"
                  >Search...</label
                >
                <input
                  v-model="searchPokemonFields"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Search..."
                />
              </div>
              <ListPokemons
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.name"
                :name="pokemon.name"
                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                @click="SelectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import ListPokemons from "../components/ListPokemons.vue";
import cardPokemonSelected from "../components/CardPokemonSelected.vue";

let pokemons = ref([]);
let urlBaseSvg = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
let searchPokemonFields = ref("");
let pokemonSelected = ref();
let loading = ref(false);

onMounted(() => {
  fetch("https:pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res) => res.json())
    .then((res) => (pokemons.value = res.results));
});

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonFields.value) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(searchPokemonFields.value.toLowerCase())
    );
  }
  return pokemons.value;
});

const SelectPokemon = async (pokemon) => {
  loading.value = true;
  await fetch(pokemon.url)
    .then((res) => res.json())
    .then((res) => (pokemonSelected.value = res))
    .catch((err) => alert(err))
    .finally(() => (loading.value = false));

  console.log(pokemonSelected.value);
};
</script>

<style scoped>
.card-img {
  width: 10rem;
  height: 10rem;
  margin-left: 4rem;
}

.card-list {
  max-height: 40rem;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>

<template>
  <div class="pokemon-details" v-if="pokemon">
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${pokemon.id}.png`"
      alt=""
      srcset=""
    />
    <p>{{ pokemon.name }}</p>
  </div>
</template>

<script>
import { getPokemon } from "@/api/pokemons";

export default {
  name: "PokemonDetails",
  props: {
    id: Number,
  },
  data() {
    return {
      pokemon: null,
    };
  },
  methods: {
    getPokemonById() {
      getPokemon(this.$props.id).then((json) => {
        this.pokemon = json;
      });
    },
  },
  mounted() {
    this.getPokemonById();
  },
  updated() {
    this.getPokemonById();
  },
};
</script>

<style>
</style>
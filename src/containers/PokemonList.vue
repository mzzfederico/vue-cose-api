<template>
  <div class="pokemon-list">
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="pokemon.name">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${
            index + 1
          }.png`"
          alt=""
          srcset=""
        />
        <a @click="mostraPokemon(index)">{{ pokemon.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPokemons } from "@/api/pokemons";

export default {
  name: "PokemonList",
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    getPokemons().then((json) => {
      this.pokemons = json.results;
    });
  },
  methods: {
    mostraPokemon(index) {
      this.$emit("mostraPokemon", index + 1);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
li {
  display: inline-block;
}
</style>
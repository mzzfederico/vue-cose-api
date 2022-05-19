<template>
  <div id="app">
    <home-page>
      {{ regioneMaiuscolo }} {{ regioneInvertito }}
      <button
        v-for="merdacciaSecca in muoriPezzoDiMerda"
        :key="merdacciaSecca"
        @click="cambiaRegione(merdacciaSecca)"
      >
        {{ merdacciaSecca }}
      </button>
      <h3>{{ regione }}</h3>
      <pokemon-list @mostraPokemon="mostraPokemon" :regione="regione" />
      <pokemon-details :id="5" />

      <componente-esempio razza="bassotto" colore="rosso" :volume="10" />
    </home-page>
  </div>
</template>

<script>
import ComponenteEsempio from "./ComponenteEsempio.vue";
import PokemonDetails from "./containers/PokemonDetails.vue";
import PokemonList from "./containers/PokemonList.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    HomePage,
    PokemonList,
    PokemonDetails,
    ComponenteEsempio,
  },
  data: () => ({
    data: new Date(),
    regione: "kanto",
    muoriPezzoDiMerda: ["kanto", "johto", "hoenn", "culonia"],
  }),
  computed: {
    regioneMaiuscolo: function () {
      return this.regione.toLocaleUpperCase();
    },
    regioneInvertito: function () {
      let inverso = "";
      for (let index = this.regione.length - 1; index >= 0; index--) {
        const lettera = this.regione[index];
        inverso = inverso + lettera;
      }
      return inverso;
    },
  },
  methods: {
    cambiaRegione: function (nuovaRegione) {
      this.regione = nuovaRegione;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

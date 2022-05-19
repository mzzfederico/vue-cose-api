<template>
  <div class="cane">
    <h1>{{ nome }} di razza {{ razza }} e colore {{ colore }}</h1>
    <h2>{{ sp }}</h2>
    <button @click="abbaia(volume)">abbaia</button>
  </div>
</template>

<script>
export default {
  name: "ComponenteCane",
  props: {
    colore: String,
    razza: String,
    volume: Number,
  },
  data: () => ({
    eta: 3,
    nome: "Bobbi",
    hp: 100,
    sp: 100,
  }),
  methods: {
    abbaia(volume = 0) {
      this.sp = this.sp - volume;
      this.$emit("abbaia", volume);
    },
  },
  mounted() {
    this.abbaia();
  },
};
</script>

<style>
</style>
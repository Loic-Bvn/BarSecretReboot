<template>
  <div class="cocktail-list">
    <h2>Liste des Cocktails</h2>
    <div v-if="cocktails.length === 0">Aucun cocktail trouvé.</div>
    <div v-else>
      <CocktailItem v-for="cocktail in cocktails" :key="cocktail.Name" :cocktail="cocktail" />
    </div>
  </div>
</template>

<script>
import CocktailItem from './CocktailItem.vue';

export default {
  components: {
    CocktailItem,
  },
  props: {
    cocktails: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Ton style ici */
</style>

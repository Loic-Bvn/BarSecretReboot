<template>
  <div class="cocktail-item">
    <h3>{{ cocktail.Name }}</h3>
    <ul>
      <li v-for="ingredient in cocktail.Recipe" :key="ingredient.Ingredient">
        {{ ingredient.Oz }} {{ ingredient.Ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Ton style ici */
</style>

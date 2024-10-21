<template>
  <div class="cocktail-filter">
    <h1>COCKTAIL FILTER</h1>
    <form @change="updateFilter">
      <!-- Boucle sur chaque catégorie d'ingrédients -->
      <div v-for="category in ingredients" :key="category.name" class="category">
        <!-- Affiche le nom de la catégorie -->
        <h3>{{ category.name }}</h3>
        
        <!-- Boucle sur chaque item de la catégorie -->
        <div v-for="item in category.items" :key="item" class="ingredient-item">
          <input type="checkbox" :id="item" :value="item" v-model="selectedIngredients" />
          <label :for="item">{{ item }}</label>
        </div>
      </div>

      <!-- Affiche la liste des ingrédients sélectionnés -->
      <h3>Ingrédients sélectionnés :</h3>
      <ul>
        <li v-for="ingredient in selectedIngredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </form>
  </div>
</template>

<script>
import FilterGroup from './FilterGroup.vue';

export default {
  components: {
    FilterGroup,
  },
  data() {
    return {
      ingredients: [
        {
          name: 'Spiritueux',
          items: ['Vodka', 'Gin', 'Rhum', 'Cachaça', 'Whisky', 'Scotch', 'Bourbon', 
                  'Rye', 'Brandy', 'Cognac', 'Absinthe', 'Tequila', 'Mezcal', 'Maraschino', 
                  'Bénédictine', 'Chartreuse', 'Apérol', 'Campari', 'Sherry', 'Vermouth', 'Porto'],
        },
        {
          name: 'Jus',
          items: ['Jus Lime', 'Jus Citron', 'Jus Orange', 'Jus Pamplemousse', 'Jus Ananas'],
        },
        {
          name: 'Sodas',
          items: ['Soda', 'Sparkling Water', 'Cola', 'Ginger Soda', 'Tonic'],
        },
        {
          name: 'Sirops',
          items: ['Sucre', 'Orgeat', 'Grenadine', 'Cream de coco', 'Agave'],
        },
        {
          name: 'Autres ingrédients',
          items: ['Crème', 'Liqueur', 'Triple Sec', 'Curaçao', 'Sparkling Wine', 'Bitter', 'Café', 'Thé', 'Blanc oeuf / Aquafaba'],
        },
      ],
      selectedIngredients: [],
    };
  },
  methods: {
    updateFilter() {
      console.log("update filter");
      this.$emit('filter', this.selectedIngredients);
    },
  },
};
</script>

<style>
  .category {
    margin-bottom: 20px;
  }

  .ingredient-item {
    margin-left: 10px;
  }
</style>

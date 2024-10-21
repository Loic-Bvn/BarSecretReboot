<template>
  <div>
    <Header/>
    <main>
      <h1>HOME PAGE</h1>
      <!-- <router-link to="/filterView">Accéder à FilterView</router-link> -->
      <h1>Liste des catégories</h1>
      <!-- Le contenu de ta page principale ici -->
      <div v-for="(item, index) in categories" :key="index">
        <ButtonCategory :label="item.label " :value="item.value"/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import ButtonCategory from '../components/ButtonCategory.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'HomePage',
    components: {
      Header, 
      Footer,
      ButtonCategory
    },
    data() {
      return {
        // cocktails: [],
        // filteredCocktails: [],
        // category: ['Vodka', 'Gin', 'Rhum', 'Cachaça', 'Whisky', 'Scotch', 'Bourbon', 'Rye', 'Brandy', 'Cognac', 'Absinthe', 'Tequila', 'Mezcal', 'Maraschino', 'Bénédictine', 'Chartreuse', 'Apérol', 'Campari', 'Sherry', 'Vermouth', 'Porto'],
        categories: [
          { label: 'Vodka', value: ['vodka']},
          { label: 'Gin', value: ['gin']},
          { label: 'Rhum', value: ['rum', 'cachaca']},
          { label: 'Whisky', value: ['whisky', 'wiskey', 'scotch', 'bourbon', 'rye']},
          { label: 'Eau de vie', value: ['brandy', 'cognac', 'armagnac']},
          { label: 'Tequila', value: ['tequila', 'mezcal']},
          { label: 'Liqueur', value: ['liqueur', 'campari', 'aperol', 'maraschino', 'benedictine']}
        ]
      };
    },
    methods: {
      // async loadCocktails() {
      //   try {
      //     const response = await fetch('./dump_anders_erickson_cocktails_28_07_2024.json');
      //     this.cocktails = await response.json();
      //     this.filteredCocktails = this.cocktails; // Au départ, afficher tous les cocktails
      //   } catch (error) {
      //     console.error('Erreur de chargement des cocktails:', error);
      //   }
      // },
      // filterCocktails(selectedIngredients) {
      //   this.filteredCocktails = this.cocktails.filter(cocktail => {
      //     return selectedIngredients.every(ingredient => 
      //       cocktail.Recipe.some(item => item.Type === ingredient)
      //     );
      //   });
      // },
    },
    mounted() {
      // this.loadCocktails();
    },
  };
</script>

<style scoped>
  main {
    min-height: 100vh; /* Ajuster la taille du contenu */
    padding: 20px;
  }
  h1 {
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 10px;
  }
</style>
<template>
  <div>
    <Header/>
    <main>
      <h1>FILTER VIEW</h1>
      <h1>Filtrer par Ingrédients</h1>
      <div class="filterview">
        <CocktailFilter @filter="filterCocktails" />
        <CocktailList :cocktails="filteredCocktails" />
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import CocktailFilter from '../components/CocktailFilter.vue';
  import CocktailList from '../components/CocktailList.vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
    components: {
      name: 'FilterView',
      CocktailList,
      CocktailFilter,
      Header, 
      Footer
    },
    data() {
      return {
        cocktails: [],
        filteredCocktails: [],
      };
    },
    methods: {
      async loadCocktails() {
        try {
          const response = await fetch('./dump_anders_erickson_cocktails_28_07_2024.json');
          this.cocktails = await response.json();
          this.filteredCocktails = this.cocktails; // Au départ, afficher tous les cocktails
        } catch (error) {
          console.error('Erreur de chargement des cocktails:', error);
        }
      },
      // Filtre en mode OU (tous les cocktails content GIN ou Grenadine seront affiché par ex)
      filterCocktails(selectedIngredients) {
        // console.log("Filtres " + selectedIngredients);
        this.filteredCocktails = [];
        for (const cocktail in this.cocktails) {
            // console.log("Cocktail " + cocktail + " : " +  this.cocktails[cocktail].Name);
          for (const ingredient in this.cocktails[cocktail].Recipe) {
            let ingredientType = this.cocktails[cocktail].Recipe[ingredient]["Type"];
            let lowCaseselectedIngredients = selectedIngredients.map(str => str.toLowerCase());
            if ((lowCaseselectedIngredients).includes(ingredientType)) {
              this.filteredCocktails.push(this.cocktails[cocktail]);
            }
          }
        }
        // for (const ingredient in selectedIngredients) {
        //   console.log("Filtre " + ingredient + " : " +  selectedIngredients[ingredient]);
          



          // this.filteredCocktails = this.cocktails.filter(cocktail => {
          //   return selectedIngredients.every(ingredient => 
          //     cocktail.Recipe.some(item => item.Type === ingredient)
          //   );
          // });
      },
    },
    mounted() {
      this.loadCocktails();
    },
  };
</script>

<style>
  /* Ton style ici */
</style>

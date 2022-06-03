<template>
  <main>
    <article>
      <div>
        <CocktailCard
          v-for="cocktail in cocktailData.drinks"
          :key="cocktail.idDrink"
          :strDrink="cocktail.strDrink"
          :strCategory="cocktail.strCategory"
          :strInstructions="cocktail.strInstructions"
          :strDrinkThumb="cocktail.strDrinkThumb"
          :strIngredients="cocktail.strIngredients"
          :strMeasures="cocktail.strMeasures"
        />
      </div>
    </article>
  </main>
</template>

<script>
import CocktailCard from "@/components/CocktailCard.vue";
import { getCocktailData } from "@/services/api/cocktailAPI.js";

export default {
  name: "Main",
  components: {
    CocktailCard,
  },
  data() {
    return {
      cocktailData: [],
    };
  },
  created: function () {
    this.retrieveCocktailData();
  },
  methods: {
    async retrieveCocktailData() {
      this.cocktailData = await getCocktailData();
    },
  },
};
</script>

<style scoped>
main {
  background: lavender;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
article {
  background: white;
  width: 90vw;
  height: 80vh;
  border-radius: 30px;
  display: flex;
}

div {
  overflow: scroll;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>


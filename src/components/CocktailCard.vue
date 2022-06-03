<template>
  <div class="cocktail-card">
    <h2 class="cocktail-name">{{ strDrink }}</h2>

    <img :src="strDrinkThumb" alt="Image of a cocktail" class="cocktail-img" />

    <div class="cocktail-recipe-bk"></div>

    <div id="cocktail-recipe-wrapper"></div>

    <div id="cocktail-ingredient-img-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    strDrink: String,
    strCategory: String,
    strInstructions: String,
    strDrinkThumb: String,
    strIngredients: Array,
    strMeasures: Array,
  },

  mounted() {
    for (let i = 0; i < this.strMeasures.length; i++) {
      if (this.strMeasures[i] != null && this.strIngredients[i] != null) {
        let cocktailRecipe = document.createElement("p");
        let textNode = document.createTextNode(
          "- " + this.strMeasures[i] + " of " + this.strIngredients[i] + " "
        );
        cocktailRecipe.appendChild(textNode);
        document
          .getElementById("cocktail-recipe-wrapper")
          .appendChild(cocktailRecipe);
      }
    }

    for (let i = 0; i < this.strIngredients.length; i++) {
      if (this.strIngredients[i] != null && this.strIngredients[i] != "") {
        let cocktailIngredientImg = new Image();
        cocktailIngredientImg.src =
          "https://www.thecocktaildb.com/images/ingredients/" +
          this.strIngredients[i] +
          ".png";
        cocktailIngredientImg.style.background = "#fff";
        cocktailIngredientImg.style.height = "100px";
        cocktailIngredientImg.style.width = "100px";
        cocktailIngredientImg.style.borderRadius = "20px";
        cocktailIngredientImg.style.marginRight = "10px";
        cocktailIngredientImg.style.marginRight = "10px";
        document
          .getElementById("cocktail-ingredient-img-wrapper")
          .appendChild(cocktailIngredientImg);
      }
    }
    document.getElementById(
      "cocktail-ingredient-img-wrapper"
    ).lastChild.style.marginRight = "0px";
  },
};
</script>

<style scoped>
.cocktail-card {
  position: relative;
  width: 60vh;
  height: 60vh;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  margin: 50px;
}

.cocktail-name {
  color: #fff;
  position: absolute;
  right: 30px;
  bottom: 190px;
  z-index: 1;
}

.cocktail-img {
  height: 100%;
}

.cocktail-recipe-bk {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 110%;
  height: 40%;
  border-radius: 30px;
  bottom: 0%;
}

#cocktail-recipe-wrapper {
  position: absolute;
  color: #ffffff;
  font-weight: 300;
  left: 30px;
  bottom: 20px;
}

#cocktail-ingredient-img-wrapper {
  position: absolute;
  left: 30px;
  bottom: 190px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow-y: scroll;
  scrollbar-width: thin; /* Firefox */

  animation: ease-in;
  transition: 0.3s;
}

#cocktail-ingredient-img-wrapper:hover {
  height: 120px;
}
</style>
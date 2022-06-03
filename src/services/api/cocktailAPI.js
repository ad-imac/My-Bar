const getCocktailData =
    async function() {
  const response =
      await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      // await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m')
  if (response.status == 200) {
    let cocktailAttributes = await response.json();
    cocktailAttributes.drinks.forEach(element => {
      let ingredients = [];
      let measures = [];
      for (let i = 1; i <= 15; i++) {
        if (element['strIngredient' + i] != null) {
          ingredients.push(element['strIngredient' + i]);
        }
        if (element['strMeasure' + i] != null)
          measures.push(element['strMeasure' + i]);
      }
      element.strIngredients = ingredients;
      element.strMeasures = measures;
    });
    return cocktailAttributes
  }
  else {
    new Error(response.statusText)
  }
}

export {
  getCocktailData
}
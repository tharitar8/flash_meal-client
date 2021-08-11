
'use strict'

const onIndexRecipesSuccess = (response) => {
  // const showRecipesHtml = recipesData({ recipes: data.recipe })
  const recipes = response.recipes
  let recipeTitlesHtml = ''
  recipes.forEach((recipe, index) => {
    // console.log(recipe)
    recipeTitlesHtml += `
      <p>${recipe.title} </p>

      <br>
      <button class='dynamic-delete-recipe' data-id=${recipe._id}
      >Delete Recipe</button>
      <br>
       <button class='show-ingredients' data-id=${recipe._id}
      >show this recipe</button>
      <br>
      <button class='update-ingredients' data-index=${index} data-id=${recipe._id}
      >Edit</button>
      <br>
      <form class="save-ingredients" data-id=${recipe._id}>
         <button type="submit" data-index=${index}>save</button>
         </form>
    `
  })
  $('#recipe-titles').html(recipeTitlesHtml)
  $('.dashboard').trigger('reset')
  $('#error-message').text('')
  // page modifications on successful call
  // console.log('in then')
  // console.log('response is: ', response)
  $('#update-recipe-form').show()
}

const onShowRecipeSuccess = (response) => {
  $('#error-message').text('')
  $('#show-recipe-form').attr('recipe._id')
  const recipe = response.recipe
  const recipeHtml = `
      <p>"${recipe.title}"</p>
      <br>
      <button class='dynamic-delete-recipe' data-id=${recipe._id}
      >Delete Recipe</button>
      <br>
       <button class='show-ingredients' data-id=${recipe._id}
      >show this recipe</button>
      <br>
      <button class='update-ingredients' data-index=${0} data-id=${recipe._id}
      >Edit</button>
      <br>
      <form class="save-ingredients" data-id=${recipe._id}>
      <div data-ingredient-id=${recipe._id}>
      <br>
      <p>Ingredients:<span class="display-data-${0} display"> ${
    recipe.ingredients
  }</span>
      <input name="recipe[ingredients]" value="${
        recipe.ingredients
      }" class="input-edit-recipe-${0} hidden" type="text"> </p>
      <br>
      <p>Steps:<span class="display-data-${0} display">${recipe.steps}</span>
      <input name="recipe[steps]" value="${
        recipe.steps
      }" class="input-edit-recipe-${0}  hidden" type="text"></p>
      <br>
      <p>Time: <span class="display-data-${0} display">${recipe.time}</span>
      <input name="recipe[time]" value="${
        recipe.time
      }"  class="input-edit-recipe-${0} hidden" type="number"></p></div>
      <br>
         <button type="submit" data-index=${0}>save</button>
         </form>
    `
  $('form').trigger('reset')
  $('#recipe-titles').html('')
  $('#recipe-titles').html(recipeHtml)
}

const onDeleteRecipeSuccess = (response) => {
  $('form').trigger('reset')
  $('#error-message').text('')
  // console.log(`Server response: ${response}`)
  $('#success-message').text('Recipe was deleted')
}

const onUpdateRecipeSuccess = (id) => {
  $('h4').show()
  $('#error-message').text('')
  // console.log(`Server response: ${id}`)
  $('#success-message').text('Recipe was updated')
  // $('.form').trigger('reset')
}

const onCreateRecipeSuccess = (response) => {
  $('form').trigger('reset')
  $('#recipe-titles').trigger('reset')
  $('#error-message').text('')
  // console.log('Server response:', response)
  $('#created-recipe').html('Create was successfully').show().delay(3000).fadeOut()
}

const onFailure = (error) => {
  $('#success-message').text('')
  $('#error-message').text(`Error making request: ${error.status}`)

  // $('#message').addClass('error-message')
  // $('#message').removeClass('success-message')
}

module.exports = {
  onIndexRecipesSuccess,
  onShowRecipeSuccess,
  onDeleteRecipeSuccess,
  onUpdateRecipeSuccess,
  onCreateRecipeSuccess,
  onFailure
  // recipesData
}

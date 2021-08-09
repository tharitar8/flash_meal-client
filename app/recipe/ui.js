// const store = require('../store')
// const getFormFields = require('../../lib/get-form-fields')

const onIndexRecipesSuccess = (response) => {
  $('form').trigger('reset')
  $('#error-message').text('')
  // page modifications on successful call
  // console.log('in then')
  // console.log('response is: ', response)
  const recipes = response.recipes
  let recipeTitlesHtml = ''
  recipes.forEach((recipe) => {
    console.log(recipe)
    recipeTitlesHtml += `
      <p>${recipe.title} </p>

      <button class='dynamic-delete-recipe' data-id=${recipe._id}
      >Delete Recipe</button>
       <button class='show-ingredients' data-id=${recipe._id}
      >show this recipe</button>
      <div class="hidden" data-ingredient-id=${recipe._id}>
      <p>Ingredients: ${recipe.ingredients}</p>
      <p>Steps: ${recipe.steps}</p>
      <p>Time: ${recipe.time}</p></div>
    `
  })
  $('#recipe-titles').html(recipeTitlesHtml)
  $('#update-recipe-form').show()
}

const onShowRecipeSuccess = (response) => {
  $('#error-message').text('')
  $('#show-recipe-form').attr('recipe._id')
  $('#shown-recipe').html(`
    <h3>Title: ${response.recipe.title}</h3>
    <p>Ingredients: ${response.recipe.ingredients}</p>
    <p>Steps: ${response.recipe.steps}</p>
    <p>Time: ${response.recipe.time}</p>
  `)
  $('form').trigger('reset')
}

const onDeleteRecipeSuccess = (response) => {
  $('#error-message').text('')
  console.log(`Server response: ${response}`)
  $('#success-message').text('Recipe was deleted')
  $('form').trigger('reset')
}

const onUpdateRecipeSuccess = (id) => {
  $('h4').show()
  $('#error-message').text('')
  console.log(`Server response: ${id}`)
  $('#success-message').text('Recipe was updated')
  $('form').trigger('reset')
}

const onCreateRecipeSuccess = (response) => {
  $('#error-message').text('')
  console.log('Server response:', response)
  $('#created-recipe').html(`
    <h3>Title: ${response.recipe.title}</h3>
  `)
  $('form').trigger('reset')
}

const onFailure = (error) => {
  $('#success-message').text('')
  $('#error-message').text(`Error making request: ${error.status}`)

  $('form').trigger('reset')

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
}

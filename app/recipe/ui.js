// const store = require('../store')
// const getFormFields = require('../../lib/get-form-fields')

const onIndexRecipesSuccess = (response) => {
  $('.dashboard').trigger('reset')
  $('#error-message').text('')
  // page modifications on successful call
  // console.log('in then')
  // console.log('response is: ', response)
  const recipes = response.recipes
  let recipeTitlesHtml = ''
  recipes.forEach((recipe, index) => {
    // console.log(recipe)
    recipeTitlesHtml += `
      <p>${recipe.title} </p>

      <button class='dynamic-delete-recipe' data-id=${recipe._id}
      >Delete Recipe</button>
      <br>
       <button class='show-ingredients' data-id=${recipe._id}
      >show this recipe</button>
      <button class='update-ingredients' data-index=${index} data-id=${recipe._id}
      >Edit</button>
      <div class="hidden" data-ingredient-id=${recipe._id}>
      <p>Ingredients:<span class="display-data-${index} display"> ${recipe.ingredients}</span>
      <input value="${recipe.ingredients}" class="input-edit-recipe-${index} hidden" type="text"> </p>
      <p>Steps:<span class="display-data-${index} display">${recipe.steps}</span>
      <input value="${recipe.steps}" class="input-edit-recipe-${index}  hidden" type="text"></p>
      <p>Time: <span class="display-data-${index} display">${recipe.time}</span>
      <input value="${recipe.time}"  class="input-edit-recipe-${index} hidden" type="number"></p></div>

      <button class='save-ingredients' data-index=${index} data-id=${recipe._id}
      >save</button>
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
  $('.dashboard').trigger('reset')
  $('#error-message').text('')
  // console.log('Server response:', response)
  $('#created-recipe').html(`
    <h3>Title: ${response.recipe.title}</h3>
  `)
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
}

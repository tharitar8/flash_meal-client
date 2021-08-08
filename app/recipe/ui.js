// const store = require('../store')

const onIndexRecipesSuccess = (response) => {
  $('#error-message').text('')
  // page modifications on successful call
  console.log('in then')
  console.log('response is: ', response)

  const recipes = response.recipes

  let recipeTitlesHtml = ''

  recipes.forEach((recipe) => {
    console.log(recipe)
    recipeTitlesHtml += `
      <h4>${recipe.title} </h4>
      <p>ID: ${recipe._id}</p>
      <button class='dynamic-delete-book' data-id=${recipe._id}>Delete Recipe</button>
    `
  })

  $('#recipe-titles').html(recipeTitlesHtml)
  $('form').trigger('reset')
}

const onShowRecipeSuccess = (response) => {
  $('#error-message').text('')
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

const onUpdateRecipeSuccess = (response) => {
  $('#error-message').text('')
  console.log(`Server response: ${response}`)
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

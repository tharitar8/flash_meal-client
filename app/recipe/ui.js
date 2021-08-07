const store = require('../store')

const createRecipeSuccess = (response) => {
  $('form').trigger('reset')
  store.recipeList = response.recipeList
  $('#message').text('Your recipe successful created')
}

const createRecipeFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Something went wrong !')
}
const indexRecipeSuccess = (data) => {
  store.recipes = data.recipes
}

const editRecipeSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('Recipe Updated!')
}

const editRecipeFailure = () => {
  $('#message').text('Please Try again !')
}

const removeRecipeSuccess = (id) => {
  $(`${id}'`).remove()
  $('#message').text('Successful deleted recipe!')
}

const removeRecipeFailure = () => {
  $('#message').text('Sorry You cannot delete this recipe!')
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  indexRecipeSuccess,
  editRecipeSuccess,
  editRecipeFailure,
  removeRecipeSuccess,
  removeRecipeFailure
}

'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

// define event handler
const onIndexRecipes = () => {
  console.log('in event listener')
  // api call
  api.indexRecipes()
    .then(ui.onIndexRecipesSuccess)
    .catch(ui.onFailure)
}
const onShowRecipe = (event) => {
  event.preventDefault()
  console.log('in form listener')
  const recipeData = getFormFields(event.target)
  const recipeId = recipeData.recipe._id
  api.showRecipe(recipeId)
    .then(ui.onShowRecipeSuccess)
    .catch(ui.onFailure)
}
const onDeleteRecipe = (event) => {
  event.preventDefault()
  const deleteData = getFormFields(event.target)
  const deleteId = deleteData.recipe._id
  // const deleteId = $(event.target).data('id')
  console.log('delete')
  api.deleteRecipe(deleteId)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onFailure)
}

const onUpdateRecipe = (event) => {
  event.preventDefault()
  const recipeData = getFormFields(event.target)
  const recipeId = recipeData.recipe._id
  // const recipeId = $(event.target).data('id')
  console.log('update')
  api.updateRecipe(recipeId, recipeData)
    .then(ui.onUpdateRecipeSuccess)
    .catch(ui.onFailure)
}

const onCreateRecipe = (event) => {
  event.preventDefault()
  const recipeData = getFormFields(event.target)
  console.log('add')
  api.createRecipe(recipeData)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onFailure)
}
const onDynamicDeleteRecipe = (event) => {
  // console.log($(event.target).data('id'))
  const recipeId = $(event.target).data('id')

  api.deleteBook(recipeId)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onIndexRecipes,
  onCreateRecipe,
  onShowRecipe,
  onUpdateRecipe,
  onDeleteRecipe,
  onDynamicDeleteRecipe
}

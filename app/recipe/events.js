'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

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

const onEditRecipe = (event) => {
  event.preventDefault()
  const index = event.target.dataset.index
  $(`.input-edit-recipe-${index}`).show()
  $(`.display-data-${index}`).hide()
}
const onUpdateRecipe = (event) => {
  event.preventDefault()
  console.log(event.target)
  const recipeData = getFormFields(event.target)
  const recipeId = $(event.target).data('id')
  store.recipe._id = event.target.dataset.id
  console.log('update')
  api.updateRecipe(recipeData, recipeId)
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

  api.deleteRecipe(recipeId)
    .then(ui.onDeleteRecipeSuccess)
    .catch(ui.onFailure)
}
const onShowIngredients = (event) => {
  console.log(event.target)
  const id = $(event.target).data('id')
  // target in jquery
  $(`*[data-ingredient-id=${id}]`).show()
}
module.exports = {
  onIndexRecipes,
  onCreateRecipe,
  onShowRecipe,
  onEditRecipe,
  onDeleteRecipe,
  onDynamicDeleteRecipe,
  onShowIngredients,
  onUpdateRecipe
}

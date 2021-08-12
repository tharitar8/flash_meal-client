'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// define event handler
const onIndexRecipes = () => {
  // console.log('in event listener')
  // api call
  api.indexRecipes()
    .then(ui.onIndexRecipesSuccess)
    .catch(ui.onFailure)
}
const onShowRecipe = (event) => {
  event.preventDefault()
  // console.log('in form listener')
  const id = $(event.target).data('id')
  api.showRecipe(id)
    .then(ui.onShowRecipeSuccess)
    .catch(ui.onFailure)
}
const onDeleteRecipe = (event) => {
  event.preventDefault()
  const deleteData = getFormFields(event.target)
  const deleteId = deleteData.recipe._id
  // const deleteId = $(event.target).data('id')
  // console.log('delete')
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
  // console.log(event.target)
  const recipeData = getFormFields(event.target)
  const recipeId = $(event.target).data('id')
  // console.log('update')
  api
    .updateRecipe(recipeId, recipeData)
    .then(ui.onUpdateRecipeSuccess)
    .then(() => {
      onIndexRecipes(event)
    })
    .catch(ui.onFailure)
}
const onCreateRecipe = (event) => {
  event.preventDefault()
  const recipeData = getFormFields(event.target)
  // console.log('add')
  api
    .createRecipe(recipeData)
    .then(api.indexRecipes)
    .then(ui.onIndexRecipesSuccess)
    .then(ui.onCreateRecipeSuccess)
    .catch(ui.onFailure)
}
const onDynamicDeleteRecipe = (event) => {
  // console.log($(event.target).data('id'))
  const recipeId = $(event.target).data('id')
  api
    .deleteRecipe(recipeId)
    .then(ui.onDeleteRecipeSuccess)
    .then(() => {
      onIndexRecipes(event)
    })
    .catch(ui.onFailure)
}
const onShowIngredients = (event) => {
  // console.log(event.target)
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

'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const store = require('../store')

const onRecipeListCreate = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.recipeListCreate(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}
const onRecipeListIndex = (event) => {
  event.preventDefault()
  api.recipeListIndex()
    .then(ui.indexRecipeSuccess)
    .catch(ui.indexRecipeFailure)
}

const onRecipeListEdit = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const recipeListId = $(event.target).data('id')
  api.recipeListEdit(data, recipeListId)
    .then(ui.editRecipeSuccess)
    .then(() => {
      onRecipeListIndex(event)
    })
    .catch(ui.editRecipeFailure)
}

const onRecipeListRemove = (event) => {
  event.preventDefault()
  const recipeListId = $(event.target).data('id')
  api.recipeListRemove(recipeListId)
    .then(() => ui.removeRecipeSuccess(recipeListId))
    .catch(ui.removeRecipeFailure)
}

module.exports = {
  onRecipeListCreate,
  onRecipeListIndex,
  onRecipeListEdit,
  onRecipeListRemove
}

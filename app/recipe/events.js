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

// const onRecipeListEdit = () => {
//   event.preventDefault()
// //   store.recipeList._id = eve
// }

// const onRecipeListRemove = (event) => {
//   const recipeListId =
//   event.preventDefault()
//   api.recipeListRemove()
//     .then(ui.removeRecipeSuccess)
//     .catch(ui.removeRecipeFailure)
// }

module.exports = {
  onRecipeListCreate,
  onRecipeListIndex
  // onRecipeListEdit,
  // onRecipeListRemove

}

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('../app/auth/events')
const recipeEvents = require('./recipe/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').hide()
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#close-box').hide()
  $('.dashboard').hide()
  $('h4').hide()
  // recipe events
  $('#recipe-titles').on('click', '.show-ingredients', recipeEvents.onShowIngredients)
  $('#get-recipes').on('click', recipeEvents.onIndexRecipes)
  $('#show-recipe-form').on('submit', recipeEvents.onShowRecipe)
  $('#delete-recipe-form').on('submit', recipeEvents.onDeleteRecipe)
  $('#update-recipe-form').hide()

  $('#shown-recipe').on('click', recipeEvents.onShowRecipe)

  $('#update-recipe-form').on('click', recipeEvents.onUpdateRecipe)

  $('#create-recipe-form').on('submit', recipeEvents.onCreateRecipe)
  $('#recipe-titles').on(
    'click',
    '.dynamic-delete-recipe',
    recipeEvents.onDynamicDeleteRecipe
  )
  // $('#delete').on('click', recipeEvents.onDeleteRecipe)
})

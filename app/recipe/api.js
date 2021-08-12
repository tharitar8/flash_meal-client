'use strict'
const config = require('../config')
const store = require('../store')

const indexRecipes = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      recipe: {
        owner: store.user._id
      }
    }
  })
}

const showRecipe = (id) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteRecipe = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipes/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateRecipe = (id, recipeData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipes/' + id,
    data: recipeData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createRecipe = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      recipe: {
        title: data.recipe.title,
        ingredients: data.recipe.ingredients,
        steps: data.recipe.steps,
        time: data.recipe.time
      }
    }
  })
}

module.exports = {
  indexRecipes,
  showRecipe,
  deleteRecipe,
  updateRecipe,
  createRecipe
}

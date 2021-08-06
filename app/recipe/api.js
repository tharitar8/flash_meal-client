'use strict'
const config = require('../config')
const store = require('../store')

const recipeListCreate = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/recipeslist',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      recipeList: {
        title: data.recipeList.title,
        ingredients: data.recipeList.ingredients,
        steps: data.recipeList.steps,
        time: data.recipeList.time
      }
    }
  })
}

const recipeListIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipeslist',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      recipeList: {
        owner: store.user._id
      }
    }
  })
}

const recipeListShow = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/recipeslist/' + store.recipeList._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const recipeListUpdate = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/recipeslist/' + store.recipeList._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
const recipeListRemove = (recipeListId) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/recipeslist/' + recipeListId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  recipeListCreate,
  recipeListIndex,
  recipeListShow,
  recipeListUpdate,
  recipeListRemove
}

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
        time: 

      }
    }
  })
}

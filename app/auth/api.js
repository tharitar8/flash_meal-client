'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = (token) => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      passwords: {
        old: data.passwords.old,
        new: data.passwords.new
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}

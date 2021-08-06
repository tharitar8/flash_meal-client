'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('form').trigger('reset')
  console.log('hooray')
  $('#sign-up').hide()
  $('#message').text(
    'Thank you for signing up! Please sign in! ' + response.user.email
  )
}

const onSignUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Something went wrong please try again !')
  $('#message').show()
}

const onSignInSuccess = (response) => {
  store.user = response.user
  $('form').trigger('reset')
  $('#message').text('Welcome back! ' + response.user.email)
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('h2').hide()
  $('#change-pw').show()
  $('#sign-out').show()
}

const onSignInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Something went wrong Please try again !')
}

const onChPwSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('Password changed! ').show().delay(3000).fadeOut()
  $('#return').hide()
}
const onChPwFailure = () => {
  $('#change-pw')[0].reset()
  $('#message')
    .text('Password Do not match, Try agin!')
    .show()
    .delay(3000)
    .fadeOut()
  $('#return').hide()
}

const onSignOutSuccess = () => {
  store.user.token = null
  $('#message').text("You've been logged out ").show().delay(3000).fadeOut()
  $('#ch-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('h2').show()
  $('#return').hide()
}

const onSignOutFailure = () => {
  $('#message')
    .text('Sign Out Failed !')
    .show()
    .delay(3000)
    .fadeOut()
  $('#return').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChPwSuccess,
  onChPwFailure,
  onSignOutSuccess,
  onSignOutFailure
}

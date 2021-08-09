'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('form').trigger('reset')
  console.log('hooray')
  $('#sign-up').hide()
  $('#message-box').text(
    'Thank you for signing up! Please sign in! ' + response.user.email
  )
}

const onSignUpFailure = () => {
  $('form').trigger('reset')
  $('#message-box').text('Something went wrong please try again !')
  $('#message').show()
}

const onSignInSuccess = (response) => {
  store.user = response.user
  $('form').trigger('reset')
  $('#message-box').text('Welcome back! ' + response.user.email)
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('h2').hide()
  $('#container').hide()
  $('#change-pw').show()
  $('#sign-out').show()
  $('#close-box').show()
  $('#close-box').on('click', () => {
    $('.container').hide()
  })
  $('#close-box').on('click', () => {
    $('.dashboard').show()
  })
}

const onSignInFailure = () => {
  $('form').trigger('reset')
  $('#change-pw').hide()
  $('#message-box').text('Something went wrong Please try again !')
  console.log('no')
}

const onChPwSuccess = () => {
  $('form').trigger('reset')
  $('#message-box').text('Password changed! ')
  $('#sign-in').show()
  $('#change-pw').hide()
  $('#close-box').on('click', () => {
    $('.dashboard').show()
  })
}
const onChPwFailure = () => {
  $('#change-pw')[0].reset()
  $('#message-box')
    .text('Something Wrong Please Try agin!')
    .show()
    .delay(3000)
    .fadeOut()
}

const onSignOutSuccess = () => {
  store.user.token = null
  $('#message-box').text("You've been logged out ").show().delay(3000).fadeOut()
  $('#ch-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('h2').show()
}

const onSignOutFailure = () => {
  $('#message-box')
    .text('Sign Out Failed !')
    .show()
    .delay(3000)
    .fadeOut()
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

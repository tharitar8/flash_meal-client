'use strict'

const store = require('../store')

const onSignUpSuccess = (response) => {
  $('form').trigger('reset')
  // console.log('hooray')
  $('#sign-up').hide()
  $('#message-box').text(
    'Thank you for signing up! Please sign in! ' + response.user.email
  )
  $('.dashboard').hide()
  $('#sign-out').hide()
}

const onSignUpFailure = () => {
  $('form').trigger('reset')
  $('#message-box').text('Something went wrong please try again !')
  $('#message').show()
  $('.dashboard').hide()
  $('#sign-out').hide()
}

const onSignInSuccess = (response) => {
  store.user = response.user
  $('form').trigger('reset')
  $('.log-out').show()
  $('#icon-logout').show()
  $('#message-box').text('Welcome back! ' + response.user.email).show()
  $('#sign-in').hide()
  $('#log-in').hide()
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
  $('#agreement').hide()
}

const onSignInFailure = () => {
  $('form').trigger('reset')
  $('#change-pw').hide()
  $('#message-box').text('Something went wrong Please try again !')
  // console.log('no')
  $('.dashboard').hide()
  $('#close-box').hide()
  $('#agreement').hide()
  $('#sign-up').show()
}

const onChPwSuccess = () => {
  $('form').trigger('reset')
  $('#message-box').text('Password changed! ')
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-pw').hide()
  // $('#close-box').on('click', () => {
  $('.dashboard').hide()
  $('#close-box').hide()
  $('#agreement').hide()
  // })
}
const onChPwFailure = () => {
  $('#change-pw')[0].reset()
  $('#message-box').text('Something Wrong Please Try agin!').show().delay(3000).fadeOut()
  $('.dashboard').hide()
  $('#close-box').hide()
  $('#agreement').hide()
}

const onSignOutSuccess = () => {
  $('#icon-logout').hide()
  $('#message-box').text("You've been logged out ").show()
  $('.container').show()
  $('#close-box').hide()
  $('#change-pw').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('h2').show()
  $('.dashboard').hide()
  $('#agreement').hide()
}

const onSignOutFailure = () => {
  $('#message-box').text('Sign Out Failed !').show()
  $('.dashboard').hide()
  $('#close-box').hide()
  $('#sign-up').show()
  $('#agreement').hide()
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

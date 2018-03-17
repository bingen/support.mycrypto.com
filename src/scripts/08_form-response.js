function checkQueryString() {

  //Fill this JSON object with error codes, make the keys something like 'ERR_001'.
  var objErrors = {
    "default": "ERROR: Some generic error message"
  };

  if ( getQueryString('code') == 'ok' ) {

    $('.form--success').show()

  } else if ( getQueryString('code') !== null ) {

    var error  = escapeHtml(getQueryString('code') + ": " + getQueryString('message'))

    //See if the message (error code) is in objErrors translation table
    var strErrorMessage = objErrors.default
    if(getQueryString("message") in objErrors) {
      strErrorMessage = objErrors[getQueryString("message")]
    }

    var mailto = 'mailto:support@mycrypto.com?Subject=Need%20Support&Body=%0A%0A%0A%0Aps%3A%20I%20couldn%27t%20send%20via%20the%20form.%20I%20got%20the%20error%3A%20'
    $('.form--error').show()
    $('.form--error .text-danger').after( '<p class="text-danger">' + strErrorMessage + '</p>' )
    $('.form--error .support_link').attr('href', mailto + strErrorMessage);

  } else if ( getQueryString('search') !== null ) {

    var query = getQueryString('search')

    $('.search__input')[0].value = query

    $(".search__button")[0].click()

  }

}

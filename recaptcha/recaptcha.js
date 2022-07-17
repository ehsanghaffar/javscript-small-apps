/**
 * Google reCAPTCHA client side API.
 * @param {string} siteKey Site key.
 * @author: Ehsan Ghaffarii
 */

const apiKey = "";

function checkRecaptcha() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    //reCaptcha not verified
    alert("no pass");
  } else {
    //reCaptch verified
    alert("pass");
  }
}

// implement on the backend
function backend_API_challenge() {
  var response = grecaptcha.getResponse();
  $.ajax({
    type: "POST",
    url: "https://www.google.com/recaptcha/api/siteverify",
    data: {
      secret: apiKey,
      response: response,
      remoteip: "localhost",
    },
    contentType: "application/x-www-form-urlencoded",
    success: function (data) {
      console.log(data);
    },
  });
}

var loginLink = document.querySelector(".login-button");
  var loginPopup = document.querySelector(".modal-login");
  var close = popup.querySelector(".modal-close-button");

  var loginForm = loginPopup.querySelector(".login-form");
  var loginUsername = loginPopup.querySelector("[id=username-login]");
  var loginPassword = loginPopup.querySelector("[id=password-login]");
  var isStorageSupport = true;
  var storage = "";

  loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
  });

  loginForm.addEventListener("submit", function (evt) {
    if (!loginUsername.value || !loginPassword.value) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-error");
      loginPopup.offsetWidth = popup.offsetWidth;
      loginPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", loginUsername.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (loginPopup.classList.contains("modal-show")) {
        loginPopup.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
  });

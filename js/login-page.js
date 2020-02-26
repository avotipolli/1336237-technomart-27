  var loginForm = document.querySelector(".login-form");
  var loginUsername = loginForm.querySelector("[name=login]");
  var loginPassword = loginForm.querySelector("[name=password]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

    if (storage) {
      username.value = storage;
      password.focus();
    } else {
      username.focus();
    }

  loginForm.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-error");
      loginPopup.offsetWidth = popup.offsetWidth;
      loginPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", login.value);
      }
    }
  });

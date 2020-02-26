var regLink = document.querySelector(".reg-button");
  var regPopup = document.querySelector(".modal-reg");
  var close = popup.querySelector(".modal-close-button");

  var regForm = regPopup.querySelector(".reg-form");
  var regUsername = regPopup.querySelector("[name=username]");
  var regPassword = regPopup.querySelector("[name=password]");
  var regPhone = regPopup.querySelector("[name=phone]");
  var regEmail = regPopup.querySelector("[name=email]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  regLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      username.value = storage;
      password.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    regPopup.classList.remove("modal-show");
    regPopup.classList.remove("modal-error");
  });

  regForm.addEventListener("submit", function (evt) {
    if (!regUsername.value || !regPassword.value|| !regPhone.value|| !regEmail.value) {
      evt.preventDefault();
      regPopup.classList.remove("modal-error");
      regPopup.offsetWidth = popup.offsetWidth;
      regPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", regUsername.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

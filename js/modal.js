var button = document.querySelector(".login-button");
var button = document.querySelector(".reg-button");
  var popup = document.querySelector(".modal-login");
  var popup = document.querySelector(".modal-reg");
  var close = popup.querySelector(".modal-close-button");

  var form = popup.querySelector("form");
  var username = popup.querySelector("[name=username]");
  var password = popup.querySelector("[name=password]");
  var phone = popup.querySelector("[name=phone]");
  var email = popup.querySelector("[name=email]");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

  button.addEventListener("click", function (evt) {
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
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!username.value || !password.value|| !phone.value|| !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
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

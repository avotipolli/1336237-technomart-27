var loginButton = document.querySelector(".login-button");
var mapButton = document.querySelector(".map-button");
var regButton = document.querySelector(".reg-button");
var writeUsButton = document.querySelector(".write-us-button");
var addToCartButtons = document.querySelectorAll(".cart-modal-button");

  var loginPopup = document.querySelector(".modal-login");
  var loginModalPopup = loginPopup.querySelector(".modal");
  var mapPopup = document.querySelector(".modal-map");
  var regPopup = document.querySelector(".modal-reg");
  var writeUsPopup = document.querySelector(".modal-write-us");
  var addToCartPopup = document.querySelector(".modal-add-to-cart");

  var loginСlose = loginPopup.querySelector(".modal-close-button");
  var mapClose = mapPopup.querySelector(".modal-close-button");
  var regClose = regPopup.querySelector(".modal-close-button");
  var writeUsClose = writeUsPopup.querySelector(".modal-close-button");
  var addToCartClose = addToCartPopup.querySelector(".modal-close-button");

// логин
  var loginForm = loginPopup.querySelector(".login-form");
  var loginUsername = loginPopup.querySelector("[name=username-login]");
  var loginPassword = loginPopup.querySelector("[name=password-login]");
  var isStorageSupport = true;
  var storage = "";


  loginButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
  });
    loginСlose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
  });

  loginForm.addEventListener("submit", function (evt) {
    if (!loginUsername.value || !loginPassword.value) {
      evt.preventDefault();
      loginModalPopup.classList.remove("modal-error");
      loginModalPopup.offsetWidth = popup.offsetWidth;
      loginModalPopup.classList.add("modal-error");
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
// карта
  mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });

// регистрация
var regForm = regPopup.querySelector(".reg-form");
var regUsername = regPopup.querySelector("[name=username-reg]");
var regPassword = regPopup.querySelector("[name=password-reg]");
var regPhone = regPopup.querySelector("[name=phone-reg]");
var regEmail = regPopup.querySelector("[name=email-reg]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

regButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  regPopup.classList.add("modal-show");

  if (storage) {
    username.value = storage;
    password.focus();
  } else {
    username.focus();
  }
});

regClose.addEventListener("click", function (evt) {
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

// написать нам

var writeUsForm = writeUsPopup.querySelector(".write-us-form");
var writeUsUsername = writeUsPopup.querySelector("[name=username-write-us]");
var writeUsEmail = writeUsPopup.querySelector("[name=email-write-us]");
var isStorageSupport = true;
var storage = "";


writeUsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
});
  writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsUsername.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = popup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", writeUsUsername.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

// товар в корзине
  addToCartButtons.forEach(function (addToCartButton) {
    addToCartButton.addEventListener ("click", function (evt) {
      evt.preventDefault();
      addToCartPopup.classList.add("modal-show");
    })
});

  addToCartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addToCartPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (addToCartPopup.classList.contains("modal-show")) {
        addToCartPopup.classList.remove("modal-show");
      }
    }
  });

var sliderTabs = document.querySelectorAll('.slider-tab');

sliderTabs.forEach((sliderTab) => {
  sliderTab.addEventListener("click", (event) => {
    sliderTabs.forEach(tab => tab.classList.remove('active'));
    event.currentTarget.classList.add('active');
  })
});

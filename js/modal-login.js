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

// фильтр

setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
  var slider = document.getElementById(idX);
  var between = document.getElementById(btwX);
  var button1 = document.getElementById(btn1X);
  var button2 = document.getElementById(btn2X);
  var inpt1 = document.getElementById(input1);
  var inpt2 = document.getElementById(input2);

  var min = inpt1.min;
  var max = inpt1.max;

  /*init*/
  var sliderCoords = getCoords(slider);
  button1.style.marginLeft = '0px';
  button2.style.marginLeft = (slider.offsetWidth - button1.offsetWidth) + 'px';
  between.style.width = (slider.offsetWidth - button1.offsetWidth) + 'px';
  inpt1.value = min;
  inpt2.value = max;

  inpt1.onchange = function(evt) {
    if (parseInt(inpt1.value) < min)
      inpt1.value = min;
    if (parseInt(inpt1.value) > max)
      inpt1.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }


    var sliderCoords = getCoords(slider);
    var per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    var per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    var left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    var left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }
  inpt2.onchange = function(evt) {
    if (parseInt(inpt2.value) < min)
      inpt2.value = min;
    if (parseInt(inpt2.value) > max)
      inpt2.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }

    var sliderCoords = getCoords(slider);
    var per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    var per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    var left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    var left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }

  /*mouse*/
  button1.onmousedown = function(evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function(evt) {
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;
      button1.style.marginLeft = left1 + 'px';


      shiftX2 = evt.pageX - buttonCoords2.left;
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;

      var per_min = 0;
      var per_max = 0;
      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';

        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';

        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button2.onmousedown = function(evt) {
    var sliderCoords = getCoords(slider);
    var betweenCoords = getCoords(between);
    var buttonCoords1 = getCoords(button1);
    var buttonCoords2 = getCoords(button2);
    var shiftX2 = evt.pageX - buttonCoords2.left;
    var shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function(evt) {
      var left2 = evt.pageX - shiftX2 - sliderCoords.left;
      var right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;
      button2.style.marginLeft = left2 + 'px';


      shiftX1 = evt.pageX - buttonCoords1.left;
      var left1 = evt.pageX - shiftX1 - sliderCoords.left;
      var right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;

      var per_min = 0;
      var per_max = 0;

      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button1.ondragstart = function() {
    return false;
  };
  button2.ondragstart = function() {
    return false;
  };

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

}

// слайдер
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("catalog-slides");
  var dots = document.getElementsByClassName("slider-dots-dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// логин
var loginForm = loginPopup.querySelector(".login-form");
var loginUsername = loginPopup.querySelector("[name=username-login]");
var loginPassword = loginPopup.querySelector("[name=password-login]");
var isStorageSupport = true;
var storage = "";

loginButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});
loginСlose.addEventListener("click", function(evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function(evt) {
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

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains("modal-show")) {
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});
// карта
mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
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

regButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  regPopup.classList.add("modal-show");

  if (storage) {
    username.value = storage;
    password.focus();
  } else {
    username.focus();
  }
});

regClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  regPopup.classList.remove("modal-show");
  regPopup.classList.remove("modal-error");
});

regForm.addEventListener("submit", function(evt) {
  if (!regUsername.value || !regPassword.value || !regPhone.value || !regEmail.value) {
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

window.addEventListener("keydown", function(evt) {
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


writeUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
});
writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
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

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});

// товар в корзине
addToCartButtons.forEach(function(addToCartButton) {
  addToCartButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    addToCartPopup.classList.add("modal-show");
  })
});

addToCartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  addToCartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
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
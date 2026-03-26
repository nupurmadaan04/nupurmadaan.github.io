'use strict';

// ================= BASIC TOGGLE =================
const elementToggleFunc = function (elem) { 
  if (elem) elem.classList.toggle("active"); 
};

// ================= SIDEBAR =================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// ================= TESTIMONIALS (SAFE VERSION) =================
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

// Only run if elements exist (IMPORTANT 🔥)
if (testimonialsItem.length > 0 && modalContainer) {

  for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

      if(modalImg && modalTitle && modalText){
        modalImg.src = this.querySelector("[data-testimonials-avatar]")?.src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]")?.alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]")?.innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]")?.innerHTML;
      }

      testimonialsModalFunc();
    });

  }
}

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// ================= PROJECT FILTER =================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } 
    else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } 
    else {
      filterItems[i].classList.remove("active");
    }

  }
};

// select dropdown
for (let i = 0; i < selectItems.length; i++) {

  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;

    elementToggleFunc(select);
    filterFunc(selectedValue);

  });

}

// filter buttons
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;

    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// ================= CONTACT FORM VALIDATION =================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {

    formInputs[i].addEventListener("input", function () {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });

  }
}

// ================= NAVIGATION =================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {

  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {

      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } 
      else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }

    }

  });

}

// ================= EMAILJS =================
(function(){
  emailjs.init("0F-Ont743DD55y99g"); 
})();

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_h76yham",
      "template_8dmi6k1",
      this
    )
    .then(function() {
      alert("Message sent successfully 🚀");
      contactForm.reset(); // auto clear form
    }, function(error) {
      alert("Failed ❌ " + error.text);
    });

  });

}
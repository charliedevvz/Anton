const calendar = document.querySelector(".calendar");
const disponibles = document.querySelectorAll(".calendar__cell--disponible");
const btnReservar = document.querySelector("#btn__reservar");
const inputDate = document.querySelector(".form__inputDate");
const nav = document.querySelector(".navigation");
const navBG = document.querySelector(".navigation__background");
const navBtn = document.querySelector(".navigation__button");
const navList = document.querySelector(".navigation__list");

let fecha;

//Grabs the date from the attribute in the HTML

calendar.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.className === "calendar__cell--disponible") {
    fecha = e.target.getAttribute("fecha");
    disponibles.forEach((disponible) => {
      if (disponible.classList.contains("bg-clickGreen")) {
        disponible.classList.remove("bg-clickGreen");
      }
    });
    e.target.classList.add("bg-clickGreen");
  }
});

//Grabs the date clicked previously and scrolls into the contact form and automatically adds the date information

btnReservar.addEventListener("click", function (e) {
  e.preventDefault();
  inputDate.scrollIntoView({
    behavior: "smooth",
  });
  inputDate.value = fecha;
});

//Expands the background radial gradient to all screen and shows menu

nav.addEventListener("click", function (e) {
  console.log(e.target);
  if (
    e.target.classList.contains("navigation__button") ||
    e.target.classList.contains("navigation__linewrapper") ||
    e.target.classList.contains("navigation__line") ||
    e.target.classList.contains("navigation__navLnk")
  ) {
    nav.classList.toggle("toggleNavWidth");
    navBG.classList.toggle("toggleBG");
    navBtn.classList.toggle("toggleWhite");
    navList.classList.toggle("toggleDisplay");
  }
});

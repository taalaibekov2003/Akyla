const locations = [
  {
    name: "Площадь Ала-Тоо",
    description: "Вы стоите на главной площади города. Здесь проходят митинги, концерты и праздники.",
  },
  {
    name: "Ошский рынок",
    description: "Запах лепёшек, специй и шум торговцев наполняет улицы. Сможете найти лагман?",
  },
  {
    name: "Панфиловский парк",
    description: "Тихий уголок с аттракционами. Идеальное место для передышки.",
  },
];

let currentIndex = 0;
const locationText = document.getElementById("location-text");
const nextButton = document.getElementById("next-button");

function showLocation(index) {
  const loc = locations[index];
  locationText.innerHTML = `<h2>${loc.name}</h2><p>${loc.description}</p>`;
  nextButton.innerText = index < locations.length - 1 ? "Далее" : "Финиш";
}

nextButton.addEventListener("click", () => {
  if (currentIndex < locations.length - 1) {
    currentIndex++;
    showLocation(currentIndex);
  } else {
    locationText.innerHTML = `<h2>Поздравляем!</h2><p>Вы прошли прогулку по Бишкеку 🎉</p>`;
    nextButton.style.display = "none";
  }
});

showLocation(currentIndex);

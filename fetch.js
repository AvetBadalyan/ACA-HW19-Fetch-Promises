const input = document.getElementById("search"),
  button = document.getElementById("submitButton"),
  Capital = document.querySelector(".capital h2"),
  Flag = document.querySelector(".BottomPart"),
  Population = document.querySelector(".population h2"),
  Region = document.querySelector(".region h2"),
  Currency = document.querySelector(".currency h2"),
  Img = document.getElementById("img");

button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      const { capital, population, region, flags, currencies } = data[0];
      Capital.innerHTML = capital;
      Population.innerHTML = population;
      Region.innerHTML = region;
      Flag.style.backgroundImage = flags.png;
      Img.src = flags.png;

      for (let key in currencies) {
        Currency.textContent = `${key} ${currencies[key].symbol}`;
      }

      console.log(data);
    });
});

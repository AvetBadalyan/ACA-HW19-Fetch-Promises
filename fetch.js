const input = document.getElementsByTagName("input"),
  button = document.getElementsByTagName("button"),
  Capital = document.getElementsByClassName(".capital h2"),
  Flag = document.getElementsByClassName(".BottomPart"),
  Population = document.getElementsByClassName(".population h3"),
  Region = document.getElementsByClassName(".region h3"),
  Currency = document.getElementsByClassName(".currency h3"),
  Img = document.getElementsByTagName("img");

button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) => response.json())
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

const api = "https://emilbacklund.flywheelsites.com/wp-json/wc/store/products";

const gameContainer = document.querySelector(".all-games");
const marketContainer = document.querySelector(".market-games");

async function fetchGames() {
  try {
    const response = await fetch(api);
    const gameData = await response.json();

    console.log(gameData);

    gameContainer.innerHTML = "";
    for (let i = 0; i < gameData.length; i++) {
      let gamePicture = gameData[i].images[0].src;
      let altText = gameData[i].images[0].alt;
      let gamePrice = gameData[i].prices.price;
      let currency = gameData[i].prices.currency_code;
      let regularGamePrice = gameData[i].prices.regular_price;

      if (!gameData[i].on_sale) {
        gameContainer.innerHTML += `
        <div>
        <a href="details.html?id=${gameData[i].id}">
        <img class="game-images" src="${gamePicture}" alt="${altText}">
        </a>
        <div class="game-card">
        <div>
        <p class="search-value">${gameData[i].name}</p>
        <p>${gamePrice} ${currency}</p>
        </div>
        <a href="details.html?id=${gameData[i].id}">
            <button class="buy-button">Buy Digital</button>
          </a>
        </div>
        </div>
        `;
      } else if (gameData[i].on_sale) {
        marketContainer.innerHTML += `
          <div class="market__box">
          <a href="details.html?id=${gameData[i].id}">
          <img class="market-images" src="${gamePicture}" alt="${altText}">
          </a>
          <div class="market__game-details">
          <div>
          <p style="font-weight: 600">${gameData[i].name}</p>
          <p>
          <span class="old-price">${regularGamePrice} ${currency}</span>
          <span>${gamePrice} ${currency}</span>
          </p>
          </div>
          <div><p class"discount">${calculatePrice(
            regularGamePrice,
            gamePrice
          )}</p></div>
          <div>
          <p class="exo-light">User:</p>
          <p class="exo-smaller">DrBrave</p>
          </div>
          <div>
          <a href="details.html?id=${gameData[i].id}">
            <div class="buy-button">Buy Digital</div>
          </a>
          </div>
          </div>
          </div>
          `;
      }
    }
  } catch (error) {
    console.log("Problem with API", error);
  }
}

fetchGames();

function calculatePrice(regularPrice, newPrice) {
  let result = newPrice / regularPrice;
  result -= 1;
  result *= 100;
  result = Math.round(result);
  return result + " %";
}

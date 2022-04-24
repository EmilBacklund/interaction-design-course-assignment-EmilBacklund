const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://emilbacklund.flywheelsites.com/wp-json/wc/store/products/" + id;

const breadcrumbGameName = document.querySelector(".breadcrumb-game-name");
const gameHeading = document.querySelector(".game-detail-heading");
const gameDetailBox = document.querySelector(".detail-youtube-box");
const description = document.querySelector(".description");
const gameplayPicContainer = document.querySelector(".gameplay-flex");
const errorContainer = document.querySelector(".error-container");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const detailData = await response.json();

    let detailPicture = detailData.images[1].src;
    let detailPictureAltText = detailData.images[1].alt;
    let gamePrice = detailData.prices.price;
    let currency = detailData.prices.currency_code;
    let detailDescription = detailData.description;
    let gameplay1 = detailData.images[2].src;
    let gameplay1AltText = detailData.images[2].alt;
    let gameplay2 = detailData.images[3].src;
    let gameplay2AltText = detailData.images[3].alt;
    let detailId = detailData.id;

    document.title = `Game Hub | ${detailData.name}`;

    breadcrumbGameName.innerHTML = `<a href="javascript:window.location.reload(true)">${detailData.name}</a>`;
    gameHeading.innerHTML = `${detailData.name}`;
    gameDetailBox.innerHTML = ` 
    <div class="detail-img-container">
    <img
    
    class="game-detail-youtube"
    src="${detailPicture}"
    alt="${detailPictureAltText}"/>
    </div>
  <div class="game-detail-flex">
    <div>
      <img
        class="heart"
        src="/images/icons/heart.png"
        alt="press the heart to like this gameplay trailer"
      />
      <p class="wish-list-text">Add to wish list</p>
    </div>
    <div>
      <p class="game-cost-text">${gamePrice} ${currency}</p>
      <a href="/payment-page.html?id=${detailId}"
        ><button class="cta-button">Buy Digital</button></a
      >
    </div>
  </div>`;

    gameplayPicContainer.innerHTML = `
  <img
            class="detail-gameplay"
            src="${gameplay1}"
            alt="${gameplay1AltText}"
          />
          <img
            class="detail-gameplay2"
            src="${gameplay2}"
            alt="${gameplay2AltText}"
          />
  `;

    description.innerHTML = `
  <h2>Description:</h2>
            ${detailDescription}
  `;
  } catch (error) {
    errorContainer.innerHTML = errorMessage("error", error);
  }
}

fetchDetails();

function errorMessage(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}

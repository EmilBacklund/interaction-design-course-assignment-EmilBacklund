const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  "https://emilbacklund.flywheelsites.com/wp-json/wc/store/products/" + id;

const gameSummary = document.querySelector(".summary-flex");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const detailData = await response.json();

    let gamePrice = detailData.prices.price;
    let currency = detailData.prices.currency_code;
    let detailPicture = detailData.images[0].src;
    let detailPictureAltText = detailData.images[0].alt;

    console.log(detailData);

    gameSummary.innerHTML = `
    <div class="left-summary-container">
                  <img
                  class="summary-picture"
                  src="${detailPicture}"
                  alt="${detailPictureAltText}"
                  />
                </div>
                <div class="right-summary-container">
                  <p class="summary-text">Summary:</p>
                  <div class="summary-flex">
                    <p>${detailData.name}</p>
                    <p>${gamePrice} ${currency}</p>
                  </div>
                  <p>
                    You will get access to this game in the Game Hub client.
                  </p>
                  <a href="/payment-success.html"
                    ><button class="pay-button">Pay ${gamePrice} ${currency}</button></a
                  >
                </div>
    `;
  } catch (error) {}
}

fetchDetails();

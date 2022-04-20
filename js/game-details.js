const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');

const url =
  'https://emilbacklund.flywheelsites.com/wp-json/wc/store/products/' + id;

const breadcrumbGameName = document.querySelector('.breadcrumb-game-name');
const gameHeading = document.querySelector('.game-detail-heading');
const gameDetailBox = document.querySelector('.detail-youtube-box');

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const detailData = await response.json();

    console.log(detailData);
    console.log(detailData.images[0].src);

    let detailPicture = detailData.images[0].src;

    breadcrumbGameName.innerHTML = `<a href="javascript:window.location.reload(true)">${detailData.name}</a>`;
    gameHeading.innerHTML = `${detailData.name}`;
    gameDetailBox.innerHTML = ` 
    <div class="detail-img-container">
    <img
    class="game-detail-youtube"
    src="${detailPicture}"
    alt="gameplay trailer for Cyberpunk"
  />
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
      <p class="game-cost-text">500 kr</p>
      <a href="/payment-page.html"
        ><button class="cta-button">Buy Digital</button></a
      >
    </div>
  </div>`;
  } catch (error) {}
}

fetchDetails();

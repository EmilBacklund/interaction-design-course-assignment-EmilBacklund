function searchGame() {
  const searchInput = document.querySelector(".search-game");
  const filterSearch = searchInput.value.toUpperCase();
  const gameContainer = document.querySelector(".all-games");
  const singleGameCard = gameContainer.getElementsByTagName("div");

  for (let i = 0; i < singleGameCard.length; i++) {
    let txtValue = singleGameCard[i].textContent || singleGameCard[i].innerText;
    if (txtValue.toUpperCase().indexOf(filterSearch) > -1) {
      singleGameCard[i].style.display = "";
    } else {
      singleGameCard[i].style.display = "none";
    }
  }
}

function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
  document.body.id = "";
}

function addEventListerstoCards() {
  const cardList = document.getElementsByClassName("s-card");

  for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i];
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListerstoCards);

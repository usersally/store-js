// select elements
const plusBtn = document.querySelectorAll(".fa-plus-circle")
const minBtn = document.querySelectorAll(".fa-minus-circle") 
const deleteBtn = document.querySelectorAll(".fa-trash-alt") 
const heartBtn = document.querySelectorAll(".fa-heart")
const totalPrice = document.querySelector(".total")

// plus button
plusBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const cardBody = btn.closest(".card-body")
    const quantity = cardBody.querySelector(".quantity")

    let quantity1 = parseInt(quantity.innerText)
    quantity1++;
    quantity.innerText = quantity1
    updateTotal()
  });
});

// minus button
minBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const cardBody = btn.closest(".card-body")
    const quantity = cardBody.querySelector(".quantity")

    let quantity1 = parseInt(quantity.innerText)
    if (quantity1 > 0) {
      quantity1--
      quantity.innerText = quantity1
      updateTotal()
    }
  });
});

// delete items
deleteBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const cardBody = btn.closest(".card-body")
    cardBody.remove()
    updateTotal()
  });
});

// like items
heartBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked")
  });
});

// total price
function updateTotal() {
  let total = 0
  const allCards = document.querySelectorAll(".card-body")

  allCards.forEach(card => {
    const priceText = card.querySelector(".unit-price").innerText
    const price = parseFloat(priceText.replace("$", ""))
    const quantity = parseInt(card.querySelector(".quantity").innerText)

    total += price * quantity
  })

  totalPrice.innerText = total + " $"
}






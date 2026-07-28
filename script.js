document.getElementById("cart").addEventListener("click", function (event) {
  let hold = event.target.closest("button");
  if (hold) {
    alert("Flower Added to Cart");
  }
});

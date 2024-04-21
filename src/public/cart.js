const payBtn = document.querySelector(".btn-buy");

payBtn.addEventListener("click", () => {
  fetch("/stripe-checkout", {
    method: "post",
    headers: new Headers({ "Content-Type": "application/Json" }),
    body: JSON.stringify({
      items: JSON.parse(localStorage.getItem("cartItems")),
    }),
  })
    .then((res) => res.json())
    .then((url) => {
      location.href = url;

    })
    .catch((err) => console.log(err));
});

const paymp = document.querySelector("btnbuymp");

const response = await fetch("http://localhost:4000/create_preferences", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(orderData),
});
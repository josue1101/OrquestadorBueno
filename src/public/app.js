// const mp = new MercadoPagoConfig(
//     "TEST-1567338789016917-102921-70531cc6c0e43143b1e79d88a6be3ed6-1529720876",
//     {
//       locale: "es-MX",
//     }
//   );

//   document.getElementById(".btnbuymp").addEventListener("click", async () => {
//     try {
//       const orderData = {
//         title: item.title,
//         quantity: item.quantity,
//         price: item.price,
//       };
  
//       const response = await fetch("/create_preference", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });
  
//       const preference = await response.json();
//       createCheckoutButton(preference.id);
//     } catch (error) {
//       alert("error :(");
//     }
//   });

//   const createCheckoutButton = (preferenceId) => {
//     const bricksBuilder = mp.bricks();
  
//     const renderComponent = async () => {
//       if (window.checkoutButton) window.checkoutButton.unmount();
  
//       await bricksBuilder.create("wallet", "wallet_container", {
//         initialization: {
//           preferenceId: preferenceId,
//         },
//       });
//     };
  
//     renderComponent();
//   };
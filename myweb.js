

//  for order form 
// function showOrderForm(dessertName) {

//     // Display
//     document.getElementById('order-form').style.display = 'block';
  
//     // selected dessert name in the order form
//     document.getElementById('dessert-name').innerText = dessertName;
//   }
  
  function showOrderForm(dessertName) {
    // Display order form
    document.getElementById('order-form').style.display = 'block';
  
    // Display selected dessert name in the order form
    document.getElementById('dessert-name').innerText = dessertName;
  
    // Check if the clicked dessert is "Pastry"
    if (dessertName.toLowerCase() === 'pastry') {
      // Show the additional images for Pastry
      document.querySelector('.additional-images').style.display = 'block';
    } else {
      // Hide the additional images for other desserts
      document.querySelector('.additional-images').style.display = 'none';
    }
  }
  
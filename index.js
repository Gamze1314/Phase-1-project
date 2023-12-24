

// use mouseover event to get the title color's changed to red
// add submit event to form to save data in JSON
// keydown event.
// filter for apple products


document.addEventListener('DOMContentLoaded', () => {

  // Define the number variable if needed
  // let number = 1;
//  show the first 5 products' name once user enters 'phone' last minute deals'
  function fetchProduct() { // fetch API
    // Grab show-details
    // debugger;
// use forEach to loop over and show images for each product, create tags for each 
    fetch('https://dummyjson.com/products') // fetch products
      .then(response => response.json())
      .then((data) => { 
        console.log(data);
        let productArr = data.products;
        console.log(productArr)// products array

         productArr.forEach((productObj) => { // create li for name(title) , price
            let name = document.createElement('h2');
            name.textContent = productObj.title;

            let price = document.createElement('h4');
            price.textContent = `$${productObj.price}`;

            ul.appendChild(name);
            ul.appendChild(price);
    
          });
        
      })
      .catch((error) => console.error('Error fetching products:', error));
      
  };
 // add mouseover event to change the color of 'Last Minute Deals' 
 fetchProduct(); // call fetch product func async 
 let ul = document.getElementById('show-details');

 let form = document.getElementById('product-form')
 form.addEventListener('submit', (e) => {  // add eventListener to the form
   e.preventDefault();
   console.log(e);
   let obj = {
    productName: e.target.pname.value,
    id: e.target.category.value,
  }
 
  
   addProduct(obj);
   form.reset();
 });


 let p = document.querySelector('p');
 p.addEventListener('mouseover' , () => {
  p.style.color = "red"

 }); 

   // Reset color on mouseout
  p.addEventListener('mouseout', () => {
  p.style.color = ''; // This will remove the inline style and use the CSS defined color
  });


// Save product in JSON
function addProduct(obj) { //  error 404
  // post Method
  fetch('https://dummyjson.com/products', {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)

  })
    .then(resp => resp.json())
    .then(obj => console.log(obj));
}
 
  
});
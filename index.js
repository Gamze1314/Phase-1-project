

// use mouseover event to get the title color's changed to red
// add submit event 
// filter for apple products , click ?
// clear btn to clear DOM
// check call stack


document.addEventListener('DOMContentLoaded', () => {

  let p = document.querySelector('p')
  let ul = document.getElementById('show-details')
  let form = document.getElementById('product-form')
  let main = document.getElementById('main')
  // Define the number variable if needed
  // let number = 1;



  fetch('https://dummyjson.com/products') // // fetch API
  .then(response => response.json())
  .then((data) => { 
    console.log(data);
    let productArr = data.products;
    // renderProduct(productArr)// products array
    renderProduct(productArr)
  })
  .catch((error) => console.error('Error fetching products:', error))


      // function filters for Apple and displays on webpage
      function filterProduct(productArr) {
        let productName = e.target.pname.value
        let brand = data.products.brand
        ul.textContent = "";
      
        let filtered = productArr.filter((productObj) => productObj.startsWith(brand));
        
      
        renderProduct(filtered)
      
      }
      
       // add mouseover event to change the color of 'Last Minute Deals' 
       // call fetch product func async 
       
       
        form.addEventListener('submit', (e) => {  // add eventListener to the form
        e.preventDefault();
        console.log(e);
        let productName = e.target.pname.value
        let category = e.target.category.value
        let productArr = data.products;
        filterProduct(productArr);
      
         form.reset();
       });




  function renderProduct(productArr) { // fetch API
    // debugger;
// use forEach to loop over and display product, create tags for each 
 productArr.forEach((productObj) => { // create li for name(title) , price
  let card = document.createElement('div');
  card.className = 'card';

  let name = document.createElement('h2');
  name.textContent = productObj.title;

  let price = document.createElement('h4');
  price.textContent = `$${productObj.price}`;

  main.appendChild(card)
  card.appendChild(name);
  card.appendChild(price);
    
  });
        
}



 p.addEventListener('mouseover', () => {
  p.style.color = "red"

 }); 

   // Reset color on mouseout
  p.addEventListener('mouseout', () => {
  p.style.color = "blue"; 
  });


 // add click event to the 'clear' button', and clear out innerHTML in dom 

 let btn = document.getElementById('clear')
 btn.addEventListener('click', () => {
  main.innerHTML = ''; // Clear the innerHTML 
});

// function renderImg (urlArray) {
//   // forEach  to get each url from the array
 
//     let divForImg = document.getElementById('dog-image-container')
//      urlArray.forEach(url => {
//          let imgTag = document.createElement('img');
//          imgTag.src = url
        
//          divForImg.append(imgTag)
//      });
//    }
 


});
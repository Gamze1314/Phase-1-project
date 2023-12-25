// contentloads and displays the products
// last minute deals change color
// submit event for form, that enables search by brand name



document.addEventListener('DOMContentLoaded', () => {

  let p = document.querySelector('p')
  let ul = document.getElementById('show-details')
  let form = document.getElementById('product-form')
  let main = document.getElementById('main')


  fetch('https://dummyjson.com/products') // // fetch API
  .then(response => response.json())
  .then((data) => { 
    
    let productArr = data.products;
    // console.log(productArr);
    // console.log(data)
    
    renderProduct(productArr);
    // handleAdd(e.target.pname.value)
    // handleAdd(e.target.category.value)
    
  })
  .catch((error) => console.error('Error fetching products:', error))


    
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = e.target.pname.value
    // console.log(e.target.pname.value)
   let catValue = e.target.category.value
    handleAdd(userInput, catValue)
    
    form.reset();
  
  }) // add eventListener to the form;

  function handleAdd(name, price){
    //create DOM element , then append
    let card2 = document.createElement('div');
    card2.className = 'card';
  
    let model = document.createElement('h2');
    model.textContent = name;
  
    let price2 = document.createElement('h4');
    price.textContent = parseFloat(`${e.target.category.value}`)
  
    main.appendChild(card)
    card.appendChild(name);
    card.appendChild(price);


  }

  function renderProduct(productArr) { // fetch API
   
// use forEach to loop over and display product, create tags for each 

   let displays =  productArr.map((productObj) => { // create li for name(title) , price
  let card = document.createElement('div');
  card.className = 'card';

  let name = document.createElement('h2');
  name.textContent = productObj.title;

  let price = document.createElement('h4');
  price.textContent = `$${productObj.price}`;

  let btn = document.createElement('button')
  btn.textContent = 'ADD TO CART'

  main.appendChild(card)
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(btn)  
  });        
}


 // add click event to the 'clear' button', and clear out innerHTML in dom 
let btn = document.getElementById('clear')
btn.addEventListener('click', () => {
 main.innerHTML = ''; // Clear the innerHTML 
});
   // add mouseover event to change the color of 'Last Minute Deals' 
p.addEventListener('mouseover', () => {
  p.style.color = "red"

 }); 

   // Reset color on mouseout
  p.addEventListener('mouseout', () => {
  p.style.color = "rebeccapurple"; 
  });


     
  // GET /monsters/?_limit=50&_page=undefined limit the number of products return 
});
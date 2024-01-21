document.addEventListener('DOMContentLoaded', () => {

const p = document.querySelector('p');
const ul = document.getElementById('show-details');
const form = document.getElementById('product-form');
const main = document.getElementById('main');


  fetch('https://dummyjson.com/products')// fetch API
  .then(response => response.json())
  .then((data) => { // callback
    
    let productArr = data.products; // PRODUCTS ARR
    console.log(productArr);
    // console.log(data)
    renderProducts(productArr); // renderProducts -> not callback
   
  })
  .catch((error) => console.error('Error fetching products:', error))

  form.addEventListener('submit', (e) => { // callback
    e.preventDefault();
    let userInput = e.target.pname.value;
    let catValue = e.target.category.value;

    handleAdd(userInput, catValue);
    
    form.reset();
  });

  function handleAdd(name, price){
  
    const card2 = document.createElement('div');
    card2.className = 'card';
  
    const model = document.createElement('h2');
    model.innerText = name;
  
    const price2 = document.createElement('h4');
    price2.innerText = `$${price}`;

    card2.appendChild(model);
    card2.appendChild(price2);
    main.appendChild(card2);
  };

  function renderProducts(productArr) { 

   productArr.map((productObj) => {
   const card = document.createElement('div');
   card.className = 'card';

   const name = document.createElement('h2');
   name.innerText = productObj.title;

   const price = document.createElement('h4');
   price.innerText = `$${productObj.price}`;

   const btn = document.createElement('button');
   btn.innerText = 'ADD TO CART';

   main.appendChild(card);
   card.appendChild(name);
   card.appendChild(price);
   card.appendChild(btn);
  });        
}

const btn = document.getElementById('clear');
btn.addEventListener('click', () => { // callback
 main.innerText = ''; 
});
   
p.addEventListener('mouseover', () => {
  p.style.color = "red"
}); 

p.addEventListener('mouseout', () => {
p.style.color = "rebeccapurple"; 
});

});       






document.addEventListener('DOMContentLoaded', () => {

let p = document.querySelector('p')
let ul = document.getElementById('show-details')
let form = document.getElementById('product-form')
let main = document.getElementById('main')


  fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then((data) => { 
    
    let productArr = data.products;
    // console.log(productArr);
    // console.log(data)
    
    renderProduct(productArr);
    
  })
  .catch((error) => console.error('Error fetching products:', error))


    
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userInput = e.target.pname.value
    let catValue = e.target.category.value

    handleAdd(userInput, catValue)
    
    form.reset();
  }) 

  function handleAdd(name, price){
  
    let card2 = document.createElement('div');
    card2.className = 'card';
  
    let model = document.createElement('h2');
    model.textContent = name;
  
    let price2 = document.createElement('h4');
    price2.textContent = `$${price}`

    card2.appendChild(model)
    card2.appendChild(price2)
    main.appendChild(card2)
    
  }

  function renderProduct(productArr) { 

   let displays =  productArr.map((productObj) => { 
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


let btn = document.getElementById('clear')
btn.addEventListener('click', () => {
 main.innerHTML = ''; 
});
   
p.addEventListener('mouseover', () => {
  p.style.color = "red"

}); 

p.addEventListener('mouseout', () => {
p.style.color = "rebeccapurple"; 
});

});


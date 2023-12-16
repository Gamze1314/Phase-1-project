document.addEventListener('DOMContentLoaded', function() {
    function fetchProduct() {
      // //get the products from the API 
      let ul = document.getElementById('show-details'); 
      fetch('https://dummyjson.com/products') 
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //  MANIPULATE THE DATA HERE 
        });
    }
  
    fetchProduct(); 
  });

// status 200
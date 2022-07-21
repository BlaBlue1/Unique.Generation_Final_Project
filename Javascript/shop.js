const makeRequest = async () => {
    let response = await fetch("https://blooming-brook-91845.herokuapp.com/api/items");

    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let itemsJson = response.json();
    console.log(itemsJson);
    return itemsJson;
}



const renderItems = async () => {
    
    let displayItem = document.getElementById("shop_items");
  
    let items = await makeRequest();
    let itemsArr = items;
    console.log(itemsArr)
    itemsArr.forEach(item => {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", item.id);
        // itemCard.setAttribute("value", item.id);
        itemCard.setAttribute("class", "col-3  col-md-2 m-3 p-3 shopping-chart");
        itemCard.innerHTML = `
        <div class="card h-100">
              <img
                src="${item.image}">
              <div class="row card-body">
                <em>
                  <div class="col-12 text-center">
                    <h5 class="card-title"><b>${item.itemName}</b></h5>
                  </div>
                </em>
                <div class="col">5 Review</div>
                <div class="col">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                  <i class="bi bi-star"></i></div>
              </div>
              <div class="row m-3">
                <div class="col-4">
                  <p class="card-text">$${item.itemPrice}</p>
                </div>
                <div class="col-8 text-end"><button id="btn${item.id}" onclick="addToCart(${item.id})" class="btn text-end" value="${item.id}" style="background-color: rgb(39, 146, 154); color: white;"> Add to Cart</button></div>
              </div>
            </div>`
      
      
    displayItem.appendChild(itemCard);
    

    }
    
    );

}

renderItems();


function addToCart(itemId){
  console.log(itemId);
  idOfItemToBeSent = itemId;
  let url = `https://blooming-brook-91845.herokuapp.com/api/items/${itemId}` 
  let response = fetch(url);
  response.then(response => 
    response.json()).then(resp => {
        return fetch("https://blooming-brook-91845.herokuapp.com/api/cart/addToCart", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(resp)
        })});
  }
 
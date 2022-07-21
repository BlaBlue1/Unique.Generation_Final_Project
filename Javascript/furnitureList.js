const makeRequest = async () => {
    let response = await fetch("https://blooming-brook-91845.herokuapp.com/api/items/itemCategory?itemCategory=furniture");

    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let itemsJson = response.json();
    console.log(itemsJson);
    return itemsJson;
}



const renderItems = async () => {
    
    let displayItem = document.getElementById("funriture_list");
  
    let items = await makeRequest();
    let itemsArr = items;
    console.log(itemsArr)
    itemsArr.forEach(item => {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", item.id);
       
        itemCard.setAttribute("class", "col-4 col-md-4 m-5 p-3");
        itemCard.innerHTML = `
        <div class="card h-100">
          <img src="${item.image}" alt="...">
          <div class="row card-body">
            <div class="col-12"><h5 class="card-title">${item.itemName}</h5></div>
            <div class="col"><p class="card-text">$${item.itemPrice}</p></div>
            <div class="col-4"><button id="btn${item.id}" onclick="addToCart(${item.id})"class="btn text-end" value="${item.id}" type="text" style="background-color: rgb(39, 146, 154); color: white;">Add to Cart</button></div>
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
 
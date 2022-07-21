const makeRequest = async () => {
    let response = await fetch("https://blooming-brook-91845.herokuapp.com/api/items");

    if(!response.ok){
        throw new Error(`There is an error with status ${response.status}`)
    }
    let itemsJson = response.json();
    // console.log(itemsJson);
    return itemsJson;
}

const renderItems = async () => {
    
    let displayItem = document.getElementById("items_table");
  
    let items = await makeRequest();
    let itemsArr = items;
    // console.log(itemsArr)
    itemsArr.forEach(item => {
        let itemtableRow = document.createElement("tr");
        itemtableRow.setAttribute("data-id", item.id);
        itemtableRow.innerHTML = `
                <th scope="row">${item.id}</th>
                <td>${item.itemName}</td>
                <td>${item.itemDescription}</td>
                <td>${item.itemCategory}</td>
                <td>${item.itemSubCategory}</td>
                <td>10</td>
                <td>$${item.itemPrice}</td>
                <td>${item.image}</td>
                <td>
                  <button class="btn btn-group" type="button" style="color: white">Edit</button>
                  <button class="btn btn-group" type="button" onclick="removeItem(${item.id})" style="color: white">Remove</button>
                  
                </td>
              `

    displayItem.appendChild(itemtableRow);

    });

}

renderItems();

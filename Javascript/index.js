const itemsController = new ItemsController(0)
// assign all fields to variables
const itemName = document.getElementById('productName')
const itemCategory = document.getElementById('selectCategory')
const itemSubCategory = document.getElementById('subCategory')
const itemPrice = document.getElementById('setPrice')
const itemDescription = document.getElementById('productDescription')
const itemImageUrl = document.getElementById('imageUploadUrl')
const itemSubmit = document.getElementById('submitProduct')
const productImageDisplay = document.getElementById('productImageDisplay')
let uploadedImage = "";

function uploadImage() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        productImageDisplay.innerHTML = `<img src="${uploadedImage}" width="450" length="450" class="rounded-3" alt="..." />
        <div class="col my-4">
        <input type="file" id="imageUploadUrl" accept="image/png, image/jpg, image/webp, image/svg, image/jpeg"/>
    </div>`
    });
    reader.readAsDataURL(this.files[0])
}

function productRegisteration() {
   
    itemsController.addItem(itemName.value, itemCategory.value, itemSubCategory.value, itemPrice.value, itemDescription.value, uploadedImage)
    // console.log(itemsController.items)
    const product = JSON.stringify(itemsController.items);
    localStorage.setItem('product', product)
    alert(`${itemName.value} has been saved`)
    window.location.reload();
}

itemImageUrl.addEventListener('change', uploadImage)
itemSubmit.addEventListener('click', productRegisteration)
// console.log(itemsController.items[1]);
let localProductsJson = localStorage.getItem('product');

let localProducts = JSON.parse(localProductsJson)
// console.log(localProducts)
class Items {
    constructor(itemName, itemCategory, itemSubCategory, itemPrice, itemDescription, image){
        this.itemName = itemName,
        this.itemCategory = itemCategory,
        this.itemSubCategory = itemSubCategory,
        this.itemPrice = itemPrice,
        this.itemDescription = itemDescription,
        this.image = image
    } 
       getItem(){
        return this.itemName
       }

       getCategory(){
        return this.itemCategory
       }
    }

const itName = document.getElementById('productName')
const category = document.getElementById('selectCategory')
const subCategory = document.getElementById('subCategory')
const price = document.getElementById('setPrice')
const description = document.getElementById('productDescription')
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

    

    function addItem(){
    let item = new Items(itName.value, category.value, subCategory.value, price.value, description.value, uploadedImage);
    // console.log("let's see")
    if(item.itemName && item.itemCategory){
        fetch("https://blooming-brook-91845.herokuapp.com/api/items/addItem", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(item)
        });
        alert(`${itName.value} has been saved`)
        console.log(JSON.stringify(item))
        // window.location.reload();
    } 
    }

    


const sendItem = async () => {
    let resp = await addItem()
    if(resp.itemName && resp.itemCategory){
        fetch("https://blooming-brook-91845.herokuapp.com/api/items/addItem", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(resp)
        });
        alert(`${itName.value} has been saved`)
        window.location.reload();
    }
    // console.log("let's see")
    
}
itemImageUrl.addEventListener('change', uploadImage)
    itemSubmit.addEventListener('click', addItem)
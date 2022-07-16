class ItemsController {
    constructor(){
        this.items = localitems;
        this.currentId = localId + 1;
    } 
    addItem(name, category, subCategory, price, description, picture){
        const item = {
            id: this.currentId++,
            name: name,
            category: category,
            subCategory: subCategory,
            price: price,
            description: description,
            picture: picture
        }
        this.items.push(item);
    }
    setitems(localitems){
        this.items = localitems
        }
    }
let localitems = []
let localId;
if(localStorage.getItem('product')) {
    localitems = JSON.parse(localStorage.getItem('product'))
    localId = localitems[localitems.length - 1].id
} else {
    localId = 0
}

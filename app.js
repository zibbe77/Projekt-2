let carts = document.querySelectorAll('.addcart');

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartStorge();
    })
}

function getItem(){
    let itemNumbers = localStorage.getItem('item');
    if(itemNumbers){
        document.querySelector('.shopping span').textContent = itemNumbers;
    } 
}

function cartStorge(){
    let itemNumbers = localStorage.getItem('item') || 0;
    itemNumbers = parseInt(itemNumbers);
    localStorage.setItem('item', itemNumbers + 1);

    document.querySelector('.shopping span').textContent = itemNumbers + 1;
}

function Purchase(item) {
    var itemNumbers = localStorage.getItem(item) || 0;
    itemNumbers = parseInt(itemNumbers);
    localStorage.setItem(item, itemNumbers + 1);
}
    /*
    switch(item) {
        case 'Stellaris':
            var itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case 'Manor lords':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Hollow Knight':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'DARK SOULS 3':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Lost Ark':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Brawlhalla':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Rust':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Scrap Mechanic':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;
        case'Tom Clancys Rainbow Six Siege':
            itemNumbers = localStorage.getItem(item) || 0;
            itemNumbers = parseInt(itemNumbers);
            localStorage.setItem(item, itemNumbers + 1);
            break;

        default: console.log("item cant be switched: ", item)
            break;
       
    }
     */


function displayCart (){
let cartItem = localStorage.getItem("Stellaris")
cartItem = parseInt(cartItem);
let ifCart = document.querySelector(".checkoutmain");
    if (cartItem && ifCart){
       console.log(cartItem);
    }
}

getItem();
displayCart();
console.log("runing");
let carts = document.querySelectorAll('.addcart');

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartStorge();
    })
}

function cartStorge(){
    let itemNumbers = localStorage.getItem('item') || 0;
    itemNumbers = parseInt(itemNumbers);
    console.log(typeof itemNumbers);
    localStorage.setItem('item', itemNumbers + 1);

    document.querySelector('.shopping span').textContent = itemNumbers + 1;
}
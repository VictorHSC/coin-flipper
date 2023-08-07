var coin_quantity = 1;

const wrappers = document.querySelectorAll('.wrappers > div');

const wrapper_one = document.querySelector('.wrappers > .one');
const wrapper_two = document.querySelector('.wrappers > .two');
const wrapper_four = document.querySelector('.wrappers > .four');

const coins = document.querySelectorAll('.coin');

const result = document.getElementById("result");

coins.forEach(element => element.addEventListener('click', () => {
    const visible_coins = document.querySelectorAll('.wrappers > div[style=\"display: block;\"] > .coin');
    result.className = "";
    let win = false;
    visible_coins.forEach((element) => {
        element.classList.remove("heads");
        element.classList.remove("tails");
        setTimeout(function () {
            if (flipCoin()) {
                element.classList.add("heads");
                win = true;
            }
            else {
                element.classList.add("tails");
            }
        }, 50);
    });
    setTimeout(function () {
        result.className = win ? "win" : "lose";
    }, 1100);
}));

function inputQuantity(event) {
    coin_quantity = +event.target.value;

    wrappers.forEach(element => element.style.display = 'none');

    switch (coin_quantity) {
        case 2:
            wrapper_two.style.display = 'block';
            break;
        case 4:
            wrapper_four.style.display = 'block';
            break;
        default:
            wrapper_one.style.display = 'block';
            break;
    }
    updateQuantityText();
}

function updateQuantityText() {
    document.getElementById("quantity").innerHTML = coin_quantity;
}

function flipCoin() {
    return Math.random() < 0.5;
}
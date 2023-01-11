var coin_quantity = 1;

const coin1 = document.getElementById("coin1");
const coin2 = document.getElementById("coin2");
const coin3 = document.getElementById("coin3");
const coin4 = document.getElementById("coin4");
const coin5 = document.getElementById("coin5");

const result = document.getElementById("result");

function buttonFlipClick() {
    const visible_coins = document.querySelectorAll(".coin.show");
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
}

function inputQuantity(event) {
    coin_quantity = +event.target.value;

    switch (coin_quantity) {
        case 2:
            coin1.classList.add("show");
            coin2.classList.remove("show");
            coin3.classList.remove("show");
            coin4.classList.remove("show");
            coin5.classList.add("show");
            break;
        case 3:
            coin1.classList.add("show");
            coin2.classList.remove("show");
            coin3.classList.add("show");
            coin4.classList.remove("show");
            coin5.classList.add("show");
            break;
        case 4:
            coin1.classList.add("show");
            coin2.classList.add("show");
            coin3.classList.remove("show");
            coin4.classList.add("show");
            coin5.classList.add("show");
            break;
        case 5:
            coin1.classList.add("show");
            coin2.classList.add("show");
            coin3.classList.add("show");
            coin4.classList.add("show");
            coin5.classList.add("show");
            break;
        default:
            coin1.classList.remove("show");
            coin2.classList.remove("show");
            coin3.classList.add("show");
            coin4.classList.remove("show");
            coin5.classList.remove("show");
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
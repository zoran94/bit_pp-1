'use strict'

function Product(name, price, expDate) {
    this.id = Math.floor(Math.random() * 100000);
    this.name = name;
    this.price = Number.parseFloat(price).toFixed(2);
    this.expirationDate = expDate;
    this.getInfo = function () {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase() + this.id + ", " + this.name + ", " + this.price;
    }
}

function ShoppingBag() {
    this.products = [];
    this.addProduct = function (prod) {
        if ((prod.expirationDate - new Date()) > 0) {
            this.products.push(prod);
        } else {
            return "Expiration date passed!";
        }
    },

        this.avgPriceOfProducts = function () {
            var sum = 0;
            for (var i = 0; i < this.products.length; i++) {
                sum += parseInt(this.products[i].price);
            }
            var avg = sum / this.products.length;
            return Number.parseFloat(avg).toFixed(3);
        },

        this.getMostExpensive = function () {
            var mostExpensive = 0;
            var mostExpensiveItemIndex;
            for (var i = 0; i < this.products.length; i++) {
                if (Number(this.products[i].price) > mostExpensive) {
                    mostExpensive = Number(this.products[i].price);
                    mostExpensiveItemIndex = i;
                }
            }
            return this.products[mostExpensiveItemIndex].id + ", " + this.products[mostExpensiveItemIndex].name + ", " + this.products[mostExpensiveItemIndex].price;
        },
        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.products.length; i++) {
                sum += Number(this.products[i].price);
            }
            return sum;
        }
}

function PaymentCard(balance, status, expDate) {
    this.balance = balance;
    this.status = status;
    this.expirationDate = expDate;
}

function checkoutAndBuy(shoppBag, paymentCard) {
    if (Number(paymentCard.balance) >= shoppBag.calculateTotalPrice()) {
        paymentCard.balance = paymentCard.balance - shoppBag.calculateTotalPrice();
        return "Purchase successfull";
    } else {
        var amountNeeded = Number(shoppBag.calculateTotalPrice()) - Number(paymentCard.balance);
        return "Purchase not successfull! You are missing " + amountNeeded + " Serbian dinars!";
    }
}


var main = (function () {

    var bananaPerKg = new Product('Banana', 129.99, new Date('Januar 15, 2020'));
    var bread = new Product('Bread', 59.99, new Date('March 10 2019'));
    var orangePerKg = new Product('Orange', 99.99, new Date('March 31 2019'));

    var shoppingBag = new ShoppingBag();
    var payCard = new PaymentCard(10000, 'active', new Date('March 31 2025'));

    shoppingBag.addProduct(bread);
    shoppingBag.addProduct(bananaPerKg);
    shoppingBag.addProduct(orangePerKg);

    console.log("Hi!\n");
    console.log("Average price of products: " + shoppingBag.avgPriceOfProducts());
    console.log("Most expensive item: " + shoppingBag.getMostExpensive());
    console.log("Total price: " + shoppingBag.calculateTotalPrice());
    console.log(checkoutAndBuy(shoppingBag, payCard));
    console.log("Enjoy your day! ;)");
})();
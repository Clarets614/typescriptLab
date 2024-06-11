"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function FindTallestMountain(allmountains) {
    var highestmountain = allmountains[0];
    allmountains.forEach(function (m) {
        if (m.height > highestmountain.height) {
            highestmountain = m;
        }
    });
    return highestmountain.name;
}
var tallestmount = FindTallestMountain(mountains);
console.log(tallestmount);
var products = [
    {
        name: "IPhone",
        price: 1100
    },
    {
        name: "Macbook",
        price: 1000
    },
    {
        name: "Noise-Cancelling Headphones",
        price: 350
    },
    {
        name: "Nintendo Switch",
        price: 300
    },
    {
        name: "Vaccuum Cleaner",
        price: 700
    }
];
function calcAverageProductPrice(allprod) {
    var sum = 0;
    allprod.forEach(function (p) {
        sum += p.price;
    });
    return sum / allprod.length;
}
var showaverage = calcAverageProductPrice(products);
console.log(showaverage);
var inventory = [
    {
        product: {
            name: "Motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function calcInventoryValue(allItems) {
    var sum = 0;
    allItems.forEach(function (i) {
        sum += (i.quantity * i.product.price);
    });
    return sum;
}
var InvValue = calcInventoryValue(inventory);
console.log(InvValue);

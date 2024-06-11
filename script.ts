export{}

//TALLEST MOUNTAIN

interface Mountain {
    name: string;
    height: number;

}

let mountains: Mountain[] = [
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
]

function FindTallestMountain(allmountains:Mountain[]):string {
    let highestmountain: Mountain = allmountains[0];
    allmountains.forEach((m:Mountain) => {
        if(m.height > highestmountain.height){
            highestmountain = m;
        }
    })
    return highestmountain.name;
}

let tallestmount:string = FindTallestMountain(mountains);
console.log(tallestmount);

//PRODUCTS

interface Product {
    name: string;
    price: number;
}

let products: Product[] =[
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
]

function calcAverageProductPrice(allprod:Product[]):number{
    let sum: number = 0;
    allprod.forEach((p:Product) => {
        sum += p.price;
    })
    return sum/allprod.length;
}

let showaverage: number = calcAverageProductPrice(products);

console.log(showaverage);

//INVENTORY

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
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
]

function calcInventoryValue(allItems:InventoryItem[]):number {
    let sum: number = 0;
    allItems.forEach((i:InventoryItem) => {
        sum += (i.quantity * i.product.price);
    })
    return sum;
}

let InvValue = calcInventoryValue(inventory);

console.log(InvValue);

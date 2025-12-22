class product {
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    discountedPrice(discountPercent){
        const distcountedAmount = (this.price*discountPercent)/100;
        return this.price - distcountedAmount
    }
}



const product1 = new product("realme",20000);

console.log("Product: " + product1.name)
console.log("Product Price: " + product1.price)
console.log("Final Price afterc 10% Discount " + product1.discountedPrice(10))




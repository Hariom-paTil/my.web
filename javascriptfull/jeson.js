let product={
    name: "hariom",
    age: 18,
    work: "student",
}


let newproduct=JSON.stringify(product);
console.log(newproduct);
product=JSON.parse(newproduct);
console.log(product);
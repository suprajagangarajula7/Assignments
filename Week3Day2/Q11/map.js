const products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
function processProducts(products){
    const productNames=products.map(iteam=>products.name)
    products.forEach(iteam=>{
        if (iteam.name>50){
            console.log(`${iteam.name} is above $50`)
        }else{ console.log(`${iteam.name} is below $50`)}
    })
}
processProducts(products);
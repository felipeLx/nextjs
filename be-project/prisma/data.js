const categories = fetch("https://fakestoreapi.com/products/categories").then(res=>res.json())
    .then(json=> json)
    .catch(err => console.log(err.message))

const products = fetch("https://fakestoreapi.com/products").then(res=>res.json())
    .then(json=> json)
    .catch(err => console.log(err.message))

export {
    categories,
    products,
}
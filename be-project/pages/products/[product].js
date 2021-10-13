export default function Product({product}) {
    return (
        <div>{product.name}</div>
    )
}

/* 
is more performance and load the site render faster

getStatisPaths
where we call an API to generate pages
getStaticProps = return property from product 
where we call an API, we can receive props 
*/
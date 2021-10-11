function ProductList({products}) {
    return(
        products.map((product, index) => {
            <section index={index}>
                <div>
                    {product}
                </div>
            </section>
        })
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../products')
    const products = await res.json()

    // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}

export default ProductList
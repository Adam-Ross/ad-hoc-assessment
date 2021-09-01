import React from 'react'
import ProductItem from './ProductItem'


const Products = ({products}) => {


    return(
        <div>
            {products.map(product => (
                
                    <ProductItem 
                    
                    product={product}
                     key={product.id} />
                
            ))}
        </div>
    )
}

export default Products
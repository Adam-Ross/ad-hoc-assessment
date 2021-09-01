import React, {Fragment} from 'react'


const ProductItem = ({product}) => {
    return(

        <Fragment>
            <div className="listItem">
                <h1>{product.name}</h1>
                <p>NUMBER: {product.product_number}</p>
                <p>PRICE: {product.price}</p>
            </div>
            
        </Fragment>
    )
}

export default ProductItem
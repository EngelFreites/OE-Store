import './products.css'
import Product from '../Product/Producto'
export default function Products  ({products}){
  return(
    <div className='products'>
      <ul>
        {
          products.map( product => (
            <Product 
              key={product.id}
              id={product.id} 
              image={product.image}
              title={product.title}
              price={product.price}
              />
          ))
        }
      </ul>
    </div>
  )
}
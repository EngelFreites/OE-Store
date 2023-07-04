import './products.css'
export default function Products  ({products}){
  return(
    <div className='products'>
      <ul>
        {
          products.map( product => (
            <li key={product.id}>
              <div className="content-product">
                <img src={product.image} alt={product.title}  width='250' height='300'/>
                <div className="content-description">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
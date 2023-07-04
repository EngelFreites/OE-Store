
export default function Products  ({products}){
  return(
    <div>
      <ul>
        {
          products.map( product => (
            <li key={product.id}>{product.title}</li>
          ))
        }
      </ul>
    </div>
  )
}
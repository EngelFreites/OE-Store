import "./product.css"

export default function Product ({id, image, title, price}) {
  return(
    <div className="content-product">
      <img src={image} alt={title} width='180' height='220' />
      <div className="content-description"> 
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}
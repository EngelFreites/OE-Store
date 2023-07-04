import "./product.css"
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'

export default function Product ({id, image, title, price}) {
  return(
    <div className="content-product">
      <img src={image} alt={title} width='180' height='220' />
      <div className="content-description"> 
        <p>{title}</p>
        <div className="prices-icons">
          <p>{price}</p>
          <AiOutlineShoppingCart />
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  )
}
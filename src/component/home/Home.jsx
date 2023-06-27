import { Title } from '../Title/Title'
import { FaStoreAlt } from 'react-icons/fa'
import img from '../../assets/initial.jpg'
import model2 from '../../assets/model2.jpeg'
import model from '../../assets/model.jpg'

export function Home () {
  return (
    <div className='content grid'>
        <div className='bar col-12 '>
          <FaStoreAlt />
          Mi tienda online
        </div>
        <div className='content-img full-width'>
          <img src={img} alt='inital-img'/>
        </div>
          <Title>Recomendacion</Title>
          <div className='recomendaciones full-width' >
            <img src={model} alt='model' className='recomendacion' />
            <img src={model2} alt='model' className='recomendacion' />
          </div>
      </div>
  )
}

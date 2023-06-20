import { AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai' 
import './footer.css'
export default function Footer () {
  return (
    <div className='content-footer'>
      <div className='content-icon'>
        <AiFillFacebook data-cy='icon' />
        <AiFillInstagram data-cy='icon' />
        <AiFillGithub data-cy='icon' />
      </div>
      <div>
        <h1>Create by Engelbert</h1>
      </div>
    </div>
  )
}

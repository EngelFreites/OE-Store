import {AiFillFacebook,AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import './footer.css'
export function Footer () {
  return (
    <footer>
      Creado por Engel  
      <AiFillFacebook data-test="facebook" />
      <AiFillInstagram data-test="instagram" />
      <AiFillGithub data-test="github" />
    </footer>
  )
}

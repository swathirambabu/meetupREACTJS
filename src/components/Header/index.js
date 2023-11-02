import {Link} from 'react-router-dom'
import {Nav, Image} from './styledComponents'

const Header = () => (
  <Nav>
    <Link to="/">
      <Image
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Nav>
)
export default Header

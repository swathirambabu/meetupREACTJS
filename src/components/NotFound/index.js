import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundPara,
  NotFoundImage,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundPara>
      We are sorry, the page you requested could not be found
    </NotFoundPara>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
  </NotFoundContainer>
)
export default NotFound

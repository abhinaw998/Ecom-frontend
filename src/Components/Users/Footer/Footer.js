import { Container, Row, Col} from "react-bootstrap";
import './Footer.css'
const Footer = () => {
    return (
        <footer>
        <Container fluid className="bg-dark text-white text-center footer " style={{justifyContent:"center"}}>
        <Row className="mt-5">
          <Col>Copyright & copy Bes Online Shop</Col>
        </Row>
      </Container>
      </footer>
    )
    }
export default Footer;
import { Card, Button } from "react-bootstrap";
import  Product1 from '../images/Products/Product1.jpg'
const ProductForListComponent = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Product1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductForListComponent;

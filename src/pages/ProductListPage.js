

import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import SortOptionsComponent from "../Components/SortOptionsComponent";
import PriceFilterComponent from "../Components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../Components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../Components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../Components/filterQueryResultOptions/AttributesFilterComponent";
import ProductForListComponent from "../Components/ProductForListComponent";
import PaginationComponent from "../Components/PaginationComponent";
const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>,
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item >
              <SortOptionsComponent/>
            </ListGroup.Item>
            <ListGroup.Item>
               Filter  <br/> 
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset Filter</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <ProductForListComponent />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;

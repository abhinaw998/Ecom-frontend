import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ROUTES } from '../../Constent';
import product1 from '../../images/Products/Product1.jpg';
import './Style.css';

const CategoriesCardCompoent = () => {
	return (
		// <div className="Card">
		<LinkContainer to={ROUTES.PRODUCTS}>
			<Card className="Card">
				<Card.Img variant="top" src={product1} />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					{/* <Card.Button>GO to Categories</Card.Button> */}
				</Card.Body>
			</Card>
		</LinkContainer>
		// </div>
	);
};

export default CategoriesCardCompoent;

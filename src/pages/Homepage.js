import ProductCarouselComponent from "../Components/ProductCarouselComponent";
import CategoriesCardCompoent from "../Components/CategoriesCardCompoent";
import { Row, Container } from "react-bootstrap";

const HomePage =()=>{

    return(
        <>
            <ProductCarouselComponent/>
            <Container>
             <Row xs={2} md={2} className="g-4 mt-5">
            <CategoriesCardCompoent/>
            <CategoriesCardCompoent/>
            <CategoriesCardCompoent/>
             <CategoriesCardCompoent/>
            <CategoriesCardCompoent/>
            <CategoriesCardCompoent/>
            </Row>
            </Container>

        </>
    )
}


export default HomePage;